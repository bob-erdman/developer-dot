/**
 * @author eleith, Luke Mahe (this is a HEAVILY modified InfoBubble forked from Luke Mahe's CSS3 InfoBubble)
 */

function initializeInfoBubble()
{
   var InfoBubble = function(opt_options) 
   {
     this.baseZIndex_ = 100;
     this.isOpen_ = false;
     this.projection = null;
     this.initEvent = null;
   
     var options = opt_options || {};
   
     if (options.arrowPosition === undefined) 
       options.arrowPosition = 50;
   
     if (options.className === undefined) 
       options.className = 'infobubble';
   
     if (options.arrowSize === undefined) 
       options.arrowSize = 15;
   
     if (options.arrowStyle === undefined) 
       options.arrowStyle = 0;

   
     if (options.initEvent !== undefined) 
       this.initEvent_ = options.initEvent

      this.buildDom_();
      this.setValues(options);
   };
   
   window.InfoBubble = InfoBubble;
   InfoBubble.prototype = new google.maps.OverlayView();
   
   InfoBubble.prototype.buildDom_ = function() 
   {
     var bubble = this.bubble_ = document.createElement('DIV');
     bubble.style.position = 'absolute';
     bubble.style.zIndex = this.baseZIndex_;
   
     var content = this.content_ = document.createElement('DIV');
     this.$content = $(this.content_);
   
     // Arrow
     var arrow = this.arrow_ = document.createElement('DIV');
     var arrowOuter = this.arrowOuter_ = document.createElement('DIV');
     var arrowInner = this.arrowInner_ = document.createElement('DIV');
     var arrowSize = this.getArrowSize_();
   
     arrow.style.position = 'relative';
     arrowOuter.style.position = arrowInner.style.position = 'absolute';
     arrowOuter.style.left = arrowInner.style.left = '50%';
     arrowOuter.style.height = arrowInner.style.height = '0';
     arrowOuter.style.width = arrowInner.style.width = '0';
     arrowOuter.style.borderStyle = arrowInner.style.borderStyle = 'solid';
   
     arrowOuter.style.marginLeft = px(-arrowSize);
     arrowOuter.style.borderWidth = px(arrowSize);
     arrowOuter.style.borderBottomWidth = 0;
   
     // Shadow
     var bubbleShadow = this.bubbleShadow_ = document.createElement('DIV');
     bubbleShadow.style.position = 'absolute';
   
     // Hide the InfoBubble by default
     bubble.style.display = bubbleShadow.style.display = 'none';
   
     bubble.appendChild(content);
     arrow.appendChild(arrowOuter);
     arrow.appendChild(arrowInner);
     bubble.appendChild(arrow);
   };
   
   
   InfoBubble.prototype.getDiv = function() 
   {
      return this.bubble_;
   };
   
   InfoBubble.prototype.getClassName_ = function()
   {
      return this.get('className');
   };
   
   InfoBubble.prototype.setClassName = function(className)
   {
      if(this.get('className') != className)
         this.set('className', className);
   };
   
   /**
    * classname changed MVC callback
    */
   InfoBubble.prototype.className_changed = function() 
   {
      this.content_.className = this.getClassName_();
      this.redraw_();
   };
   
   /**
    * Gets the style of the arrow
    *
    * @private
    * @return {number} The style of the arrow.
    */
   InfoBubble.prototype.getArrowStyle_ = function() 
   {
     return parseInt(this.get('arrowStyle'), 10) || 0;
   };
   
   
   /**
    * Sets the style of the arrow
    *
    * @param {number} style The style of the arrow.
    */
   InfoBubble.prototype.setArrowStyle = function(style) 
   {
      if(this.get("arrowStyle") != style)
         this.set('arrowStyle', style);
   };
   
   /**
    * Arrow style changed MVC callback
    */
   InfoBubble.prototype.arrowStyle_changed = function() 
   {
      this.updateArrowStyle_();
   };
   
   /**
    * Gets the size of the arrow
    *
    * @private
    * @return {number} The size of the arrow.
    */
   InfoBubble.prototype.getArrowSize_ = function() {
     return parseInt(this.get('arrowSize'), 10) || 0;
   };
   
   
   /**
    * Sets the size of the arrow
    *
    * @param {number} size The size of the arrow.
    */
   InfoBubble.prototype.setArrowSize = function(size) {
     this.set('arrowSize', size);
   };
   
   /**
    * Set the position of the InfoBubble arrow
    *
    * @param {number} pos The position to set.
    */
   InfoBubble.prototype.setArrowPosition = function(pos) 
   {
      if(this.get('arrowPosition') != pos)
         this.set('arrowPosition', pos);
   };
   
   /**
    * Get the position of the InfoBubble arrow
    *
    * @private
    * @return {number} The position..
    */
   InfoBubble.prototype.getArrowPosition_ = function() 
   {
     return parseInt(this.get('arrowPosition'), 10) || 0;
   };
   
   /**
    * arrowPosition changed MVC callback
    */
   InfoBubble.prototype.arrowPosition_changed = function() {
     var pos = this.getArrowPosition_();
     this.arrowOuter_.style.left = this.arrowInner_.style.left = pos + '%';
     this.redraw_();
   };
   
   /**
    * Set the zIndex of the InfoBubble
    *
    * @param {number} zIndex The zIndex to set.
    */
   InfoBubble.prototype.setZIndex = function(zIndex) 
   {
     this.set('zIndex', zIndex);
   };
   
   
   /**
    * Get the zIndex of the InfoBubble
    *
    * @return {number} The zIndex to set.
    */
   InfoBubble.prototype.getZIndex = function() 
   {
     return parseInt(this.get('zIndex'), 10) || this.baseZIndex_;
   };
   
   
   /**
    * zIndex changed MVC callback
    */
   InfoBubble.prototype.zIndex_changed = function() 
   {
     this.bubble_.style.zIndex = this.baseZIndex_ = this.getZIndex();
   };

   InfoBubble.prototype.updatePosition_ = function()
   {
      var latLng = this.get('position');
      
      if (!latLng)
      {
          this.close();
          return;
      }

      if(!this.projection)
      {
         this.projection = this.getProjection();
      }
      
      var anchorHeight = this.getAnchorHeight_();
      var arrowSize = this.getArrowSize_();
      var arrowPosition = this.getArrowPosition_();

      arrowPosition = arrowPosition / 100;

      var pos = this.projection.fromLatLngToDivPixel(latLng);
      var width = this.content_.offsetWidth;
      var height = this.bubble_.offsetHeight;

      if (!width) return;
      
      // Adjust for the height of the info bubble
      var top = pos.y - (height + arrowSize);
      
      if (anchorHeight) {
        // If there is an anchor then include the height
        top -= anchorHeight;
      }
   
      var left = pos.x - (width * arrowPosition);

      this.bubble_.style.top = px(top);
      this.bubble_.style.left = px(left);
   };
   
   /**
    * Update the arrow style
    * @private
    */
   InfoBubble.prototype.updateArrowStyle_ = function() 
   {
      var borderWidth = parseInt(this.$content.css("border-bottom-width"), 10) || 0;
      var arrowSize = this.getArrowSize_();
      var arrowStyle = this.getArrowStyle_();
      var arrowOuterSizePx = px(arrowSize);
      var arrowInnerSizePx = px(Math.max(0, arrowSize - borderWidth));
      var arrowSizePx = px(arrowSize);
    
      var outer = this.arrowOuter_;
      var inner = this.arrowInner_;
    
      this.arrowOuter_.style.borderColor = this.$content.css("border-bottom-color") + " transparent transparent";
      this.arrowInner_.style.borderColor = this.$content.css("background-color") + " transparent transparent";
      this.arrow_.style.marginTop = px(-borderWidth);
    
      outer.style.borderTopWidth = inner.style.borderTopWidth = arrowSizePx;
      inner.style.top = px(-borderWidth);
    
      // Full arrow or arrow pointing to the left
      if (arrowStyle === 0 || arrowStyle == 1) 
         outer.style.borderLeftWidth = inner.style.borderLeftWidth = arrowSizePx;
      else
        outer.style.borderLeftWidth = inner.style.borderLeftWidth = 0;
    
      // Full arrow or arrow pointing to the right
      if (arrowStyle === 0 || arrowStyle == 2) 
         outer.style.borderRightWidth = inner.style.borderRightWidth = arrowSizePx;
      else
        outer.style.borderRightWidth = inner.style.borderRightWidth = 0;
    
      if (arrowStyle < 2) 
         outer.style.marginLeft = inner.style.marginLeft = px(-arrowSize);
      else
        outer.style.marginLeft = inner.style.marginLeft = 0;
    
      // If there is no border then don't show thw outer arrow
      if (borderWidth === 0) 
        outer.style.display = 'none';
      else 
        outer.style.display = '';
   };
   
   
   /**
    * Add px extention to the number
    *
    * @param {number} num The number to wrap.
    * @return {string|number} A wrapped number.
    */
   var px = function(num) {
     if (num) {
       // 0 doesn't need to be wrapped
       return num + 'px';
     }
     return num;
   };

   var assignIfDifferent = function(obj, field, value)
   {
      if(obj[field] != value)
         obj[field] = value;
   };
   
   /**
    * On Adding the InfoBubble to a map
    * Implementing the OverlayView interface
    */
   InfoBubble.prototype.onAdd = function() 
   {
     var panes = this.getPanes();
   
     if (panes) 
     {
       panes.floatPane.appendChild(this.bubble_);
       panes.floatShadow.appendChild(this.bubbleShadow_);
       if (this.initEvent_) {
          this.initEvent_(panes.floatPane)
       }
     }
   };

   /**
    */
   InfoBubble.prototype.getEventPane = function() 
   {
      return this.getPanes().floatPane;
   }

   /**
    * Draw the InfoBubble
    * Implementing the OverlayView interface
    */
   InfoBubble.prototype.draw = function() 
   {
      if(this.isOpen_)
      {
         this.updateArrowStyle_();
         this.figureOutSize_();
         this.updatePosition_();
      }
   };
   
   /**
    * Removing the InfoBubble from a map
    */
   InfoBubble.prototype.onRemove = function() 
   {
     if (this.bubble_ && this.bubble_.parentNode) 
       this.bubble_.parentNode.removeChild(this.bubble_);
   
     if (this.bubbleShadow_ && this.bubbleShadow_.parentNode) 
       this.bubbleShadow_.parentNode.removeChild(this.bubbleShadow_);
   };
   
   
   /**
    * Is the InfoBubble open
    *
    * @return {boolean} If the InfoBubble is open.
    */
   InfoBubble.prototype.isOpen = function() 
   {
     return this.isOpen_;
   };
   
   
   /**
    * Close the InfoBubble
    */
   InfoBubble.prototype.close = function() 
   {
      this.bubble_.style.display = this.bubbleShadow_.style.display = 'none';
      this.isOpen_ = false;
   };
   
   /**
    * Open the InfoBubble
    *
    * @param {google.maps.Map=} opt_map Optional map to open on.
    * @param {google.maps.MVCObject=} opt_anchor Optional anchor to position at.
    */
   InfoBubble.prototype.open = function(opt_map, opt_anchor) 
   {
      if (opt_map) 
      {
        this.setMap(opt_map);
      }
      
      if (opt_anchor) {
        this.set('anchor', opt_anchor);
        this.bindTo('anchorPoint', opt_anchor);
        this.bindTo('position', opt_anchor);
      }
      
      // Show the bubble and the show
      this.bubble_.style.display = this.bubbleShadow_.style.display = '';
      this.isOpen_ = true;

      if(this.get('autoPan')) 
      {
        var that = this;
        window.setTimeout(function() { that.panToView(); }, 200);
      }
   };
   
   
   /**
    * Set the position of the InfoBubble
    *
    * @param {google.maps.LatLng} position The position to set.
    */
   InfoBubble.prototype.setPosition = function(position) {
     if (position) 
       this.set('position', position);
   };
   
   
   /**
    * Returns the position of the InfoBubble
    *
    * @return {google.maps.LatLng} the position.
    */
   InfoBubble.prototype.getPosition = function() {
     return this.get('position');
   };

   /**
    * position changed MVC callback
    */
   InfoBubble.prototype.position_changed = function() 
   {
      if(this.isOpen_)
      {
         this.updatePosition_();
         if (this.get('autoPan')) { this.panToView(); }
      }
   };
   
   /**
    * Pan the InfoBubble into view
    */
   InfoBubble.prototype.panToView = function() 
   {
     //var projection = this.getProjection();
   
     if (!this.projection)  return;
     if (!this.bubble_) return;
   
     var anchorHeight = this.getAnchorHeight_();
     var height = this.bubble_.offsetHeight + anchorHeight;
     var map = this.get('map');
     var mapDiv = map.getDiv();
     var mapHeight = mapDiv.offsetHeight;
   
     var latLng = this.get('position');
     var centerPos = this.projection.fromLatLngToContainerPixel(map.getCenter());
     var pos = this.projection.fromLatLngToContainerPixel(latLng);
   
     // Find out how much space at the top is free
     var spaceTop = centerPos.y - height;
   
     // Fine out how much space at the bottom is free
     var spaceBottom = mapHeight - centerPos.y;
   
     var needsTop = spaceTop < 0;
     var deltaY = 0;
   
     if (needsTop) 
     {
       spaceTop *= -1;
       deltaY = (spaceTop + spaceBottom) / 2;
     }
   
     pos.y -= deltaY;
     latLng = this.projection.fromContainerPixelToLatLng(pos);
   
     if (map.getCenter() != latLng) 
       map.panTo(latLng);
   };
   
   
   /**
    * Converts a HTML string to a document fragment.
    *
    * @param {string} htmlString The HTML string to convert.
    * @return {Node} A HTML document fragment.
    * @private
    */
   InfoBubble.prototype.htmlToDocumentFragment_ = function(htmlString) {
     htmlString = htmlString.replace(/^\s*([\S\s]*)\b\s*$/, '$1');
     var tempDiv = document.createElement('DIV');
     tempDiv.innerHTML = htmlString;
     if (tempDiv.childNodes.length == 1) {
       return /** @type {!Node} */ (tempDiv.removeChild(tempDiv.firstChild));
     } else {
       var fragment = document.createDocumentFragment();
       while (tempDiv.firstChild) {
         fragment.appendChild(tempDiv.firstChild);
       }
       return fragment;
     }
   };
   
   
   /**
    * Sets the content of the infobubble.
    *
    * @param {string|Node} content The content to set.
    */
   InfoBubble.prototype.setContent = function(content) {
     this.set('content', content);
   };
   
   
   /**
    * Get the content of the infobubble.
    *
    * @return {string|Node} The marker content.
    */
   InfoBubble.prototype.getContent = function() {
     return /** @type {Node|string} */ (this.get('content'));
   };
   
   
   /**
    * Sets the marker content and adds loading events to images
    */
   InfoBubble.prototype.content_changed = function() 
   {
      if (!this.content_) return;
      
      $(this.content_).empty();
      var bubble  = $(this.bubble_);
      var content = this.getContent();
      var visible = bubble.css("visibility");
      
      bubble.css({visibility:"hidden"});

      if(content) 
      {
        if (typeof content == 'string') 
           content = this.htmlToDocumentFragment_(content);
      
        this.content_.appendChild(content);
      
        var that = this;
        this.$content.find("img").bind("load", function() { that.imageLoaded_(); });
      }
   
      this.figureOutSize_();
      this.updatePosition_();

      // this prevents the visible jumping on slower hardware
      bubble.css({visibility:visible});

      // force a redraw since android 4.0 overoptimizes and misses this the first time!
      var n = $("<span>");
      n.appendTo(this.getDiv());
      setTimeout(function() { n.remove(); }, 0);
   };
   
   /**
    * Image loaded
    * @private
    */
   InfoBubble.prototype.imageLoaded_ = function() 
   {
     this.redraw_();
     if (this.get('autoPan')) { this.panToView(); }
   };
   
   /**
    * Redraw the InfoBubble
    * @private
    */
   InfoBubble.prototype.redraw_ = function() 
   {
      this.draw();
   };
   
   /**
    * Figure out the optimum size of the InfoBubble
    * @private
    */
   InfoBubble.prototype.figureOutSize_ = function() 
   {
      var clone, sizer;

      if(!map)
      {
         var clone = $(this.content_.cloneNode(true)).css({width:""});
         var sizer = $("<div>").css({visibility:"hidden", display:"inline-block"}).append(clone).appendTo("body");

         var map  = this.get('map');
         var arrowSize = this.getArrowSize_();
         var mapDiv = map.getDiv();
         var gutter = arrowSize * 2;
         var mapWidth = mapDiv.offsetWidth - gutter;
         var width, height, maxWidth;
   
         width    = parseInt(sizer.width(), 10) || null;
         height   = parseInt(sizer.height(), 10) || null;
         maxWidth = parseInt(clone.css("max-width"), 10) || null;
         maxWidth = Math.min(mapWidth, maxWidth);
   
         if(maxWidth) 
            width = Math.min(width, maxWidth);
         
         arrowSize = arrowSize * 2;
         width = Math.max(width, arrowSize);
         
         // Maybe add this as a option so they can go bigger than the map if the user wants
         if(width > mapWidth)
            width = mapWidth;
         
         sizer.remove();

         this.$content.css({width:width});
      }
   };
   
   
   /**
    *  Get the height of the anchor
    *
    *  This function is a hack for now and doesn't really work that good, need to
    *  wait for pixelBounds to be correctly exposed.
    *  @private
    *  @return {number} The height of the anchor.
    */
   InfoBubble.prototype.getAnchorHeight_ = function() 
   {
     var anchor = this.get('anchor');
     if (anchor) {
       var anchorPoint = /** @type google.maps.Point */(this.get('anchorPoint'));
   
       if (anchorPoint) {
         return -1 * anchorPoint.y;
       }
     }
     return 0;
   };
   
   InfoBubble.prototype.anchorPoint_changed = function() 
   {
     this.redraw_();
   };
};
