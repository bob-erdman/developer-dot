$(function()
{
   // tile urls
   var url = 
   {
     tiles0: "https://0.tiles.avataxrates.com/tiles/", 
     tiles1: "https://1.tiles.avataxrates.com/tiles/", 
     tiles2: "https://2.tiles.avataxrates.com/tiles/", 
     tiles3: "https://3.tiles.avataxrates.com/tiles/",
   };

   // variable that maintains state of the overall app
   var state = 
   {
      initialized: false
   };

   // ui elements that need to be global
   var ui = 
   {
      map: null, 
      bubble: null
   };

   // http://msdn.microsoft.com/en-us/library/bb259689.aspx
   // quadkey algorithm function used to pull in tax tiling and map it ontop of google maps
   var quadkey = function(tileX, tileY, detail)
   {
      var key = "", range = Math.pow(2, detail);

      // adjust tile coordinates if they wrap around (too big or negative direction)
      tileX = tileX >= 0 ? tileX % range : range - (Math.abs(tileX) % range);
      tileY = tileY >= 0 ? tileY % range : range - (Math.abs(tileY) % range);

      for(var i = detail; i > 0; i--)
      {
         var digit   = 0;
         var mask    = 1 << (i - 1);

         if((tileX & mask) !== 0)
         {
            digit++;
         }

         if((tileY & mask) !== 0)
         {
            digit += 2;
         }

         key += digit.toString();
      }

      return key;
   };

   /* Get the latitude and longitude and return the spcific address details
    * Mainly used for international regions
    * @param: latlng object with lat and lng properties for geocoder
    */ 
   var resolveAddress = function(latlng) 
   {
      bubbleShow(latlng.lng, latlng.lat);
      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({'location': latlng}, function(results, status)
      {
         if(status == google.maps.GeocoderStatus.OK && results.length)
         {
            var address = {};
            var key = '';
            var address_components = results[0].address_components;
            $.each(address_components, function(index,address_type)
            {   
               key = '';

               if($.inArray("route", address_type.types) > -1 && address_type['long_name'] !== 'Unnamed Road') {
                  key = 'line1';
               } 

               if($.inArray("locality", address_type.types) > -1) {
                  key = 'city';
               }

               if($.inArray("administrative_area_level_1", address_type.types) > -1) {
                  key = 'region';
               }

               if($.inArray("country", address_type.types) > -1) {
                  key = 'country';
               }

               if($.inArray("postal_code", address_type.types) > -1) {
                  key = 'postalCode';
               }

               if(key != '') {
                  address[key] = address_type.short_name;
               }                
            });

            address.longitude = latlng.lng;
            address.latitude = latlng.lat;
            findTaxRate(address);
            
         } else {
            switch(Math.floor((Math.random()*10)))
            {
               case 0: bubbleContent("Toto, we’re not in Kansas anymore."); break;
               case 1: bubbleContent("Searching for sunken treasure?"); break;
               case 2: bubbleContent("Looking for Never Never Land?"); break;
               case 3: bubbleContent("Know where you’re going?"); break;
               case 4: bubbleContent("Let’s try that again."); break;
               case 5: bubbleContent("Let’s get you back on course. Try again."); break;
               case 6: bubbleContent("Wait a tick, we can’t find any tax rates there."); break;
               case 7: bubbleContent("That’s one rate we just can’t find."); break;
               case 8: bubbleContent("You might be a little off course."); break;
               case 9: bubbleContent("How about trying that again?"); break;
               default: bubbleContent("Where you off to?");
            }
         }
      });
   }

   // given a (string) content and a style, changes the current value of the bubble/pin on the map
   var bubbleContent = function(content, style)
   {
      ui.bubble.setValues({
         content: "<div class='" + (style || 'infobubbletext') + "'>" + content + "</div>"
      });
   };

   // shows a bubble/pin on the map at the given longitude/latiude
   var bubbleShow = function(longitude, latitude)
   {
      state.place = state.location = null;
      var position = new google.maps.LatLng(latitude, longitude);
      var emptyBubble = '<div class="infobubbletext"><div class="spinner" style="width:24px;height:16px;"><div class="bar1"></div><div class="bar2"></div><div class="bar3"></div><div class="bar4"></div><div class="bar5"></div><div class="bar6"></div><div class="bar7"></div><div class="bar8"></div><div class="bar9"></div><div class="bar10"></div><div class="bar11"></div><div class="bar12"></div></div></div>';

      if(ui.bubble)
      {
         ui.bubble.setValues({content:emptyBubble, position:position});
         ui.bubble.open();
      }
      else
      {
         var options_bubble = 
         {
            map: ui.map,
            content: emptyBubble,
            position: position,
            arrowSize: 10,
            arrowPosition: 50,
            className: 'infobubble',
            arrowStyle: 0
         }

         // infoBubble is a class that is responsible for drawing a bubble/pin on the map
         // all major customizations should really be done in CSS
         // but there are some things you can do with the options parameter
         ui.bubble = new InfoBubble(options_bubble);
         ui.bubble.open();
         $(ui.bubble.getDiv()).on('mousedown', function(e) {
            return false;
         }).on('click', function(e) {
            click(e);
            return false;
         })

         // array of handler for the start/during/end drag of the bubble
         var drag = 
         {
            offset:{},
            start: function(e)
            {
              var point = ui.bubble.projection.fromLatLngToContainerPixel(ui.bubble.get('position'));
              drag.offset = {x:e.clientX - point.x, y:e.clientY - point.y};
              $('.infobubble').css('cursor', 'move');
            },
            stop: function(e)
            {
                var point = ui.bubble.projection.fromContainerPixelToLatLng(
                      new google.maps.Point(e.clientX - drag.offset.x, e.clientY - drag.offset.y))
                ui.bubble.setPosition(point)
                var address = {latitude: point.lat(), longitude: point.lng()};
                findTaxRate(address);
                $('.infobubble').css('cursor', 'pointer');
            }
         };

         $(ui.bubble.getDiv()).draggable({ 
           opacity:0.65,
           start:drag.start,
           stop:drag.stop
         })
      }
   }

   //TODO: figure out a better way if at all possible cuz...wt...
   var titlecase = function(s)
   {
      // See that little {3} gem? It's to prevent title casing of things like "US". Yeah, hack. And some more...wheeeee!
      return s.replace(/\b(\w{3,})\b/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}).replace(
      /\((\w+)\)/g, function(txt){return txt.toUpperCase()});
   }

   //TODO: what is this any why?
   var precision = function(rate, minwidth, precision) {
      var pad = ''; for (var i = 0; i < minwidth; i++) pad += '0';
      var decimal;

      for (var i = 0; i < 2; i++) {
         decimal = /(\d+)\.(\d+)/.exec(rate);
         if (!decimal) return minwidth > 0 ? rate + '.' + pad : rate.toString();
         if (parseFloat(decimal[2].substring(0,precision)) == 0) decimal[2] = '';
         if (!(decimal[2].length || minwidth)) return decimal[1];
         if (decimal[2].length <= minwidth)
            return decimal[1] + '.' + decimal[2] + pad.substring(0, minwidth - decimal[2].length);
         if (decimal[2].length <= precision) return rate.toString();
         // round up to full precision for second try
         rate += 5/Math.pow(10,precision + 1);
      }

      // we've a number that exceeds precision ... clip it
      decimal[2] = decimal[2].substring(0,Math.min(precision, decimal[2].length));
      
      // chew up zero's at the end
      while (decimal[2][decimal[2].length - 1] == '0' && decimal[2].length > minwidth)
      decimal[2] = decimal[2].substring(0, decimal[2].length - 1);
      if (!decimal[2].length) return decimal[1];
      return decimal[1] + '.' + decimal[2];
   }

   //TODO: use to populate infobox thing
   var showInfo = function()
   {
      if(state.place && state.location)
      {
         var details = "";
         var totalRate = 0;

         for(var i = 0; i < state.place.summary.length; i++)
         {
            var place = state.place.summary[i];
            var rate  = precision(place.rate * 100, 4, 4);
            totalRate += place.rate;
            details += "<tr><td>" + titlecase(place.jurisName) + " (" + place.jurisType + ")</td><td style='text-align:right;'>" + rate + "%</td></tr>";
         }

         $("#info-rate").html(precision(totalRate * 100, 4, 4));
         $("#info-details").html(details);
      }
   }

  // Zoom Map on the given location
   var zoomMap = function(longitude,latitude,on) {
      if( on == true ) {
         ui.map.setCenter(new google.maps.LatLng(latitude, longitude));
         ui.map.setZoom(12);
      }   
  }

   // given a lat/lng, pops up a bubble on the map with the tax rate of that jurisdiction
   var findTaxRate = function(address)
   {
      var latitude = typeof(address.latitude) === "undefined" ? "" : address.latitude;
      var longitude = typeof(address.longitude) === "undefined" ? "yo" : address.longitude;
      var line1 = typeof(address.line1) === "undefined" ? "" : address.line1;
      var city = typeof(address.city) === "undefined" ? "" : address.city;
      var region = typeof(address.region) === "undefined" ? "" : address.region;
      var postalCode = typeof(address.postalCode) === "undefined" ? "" : address.postalCode;
      var country = typeof(address.country) === "undefined" ? "" : address.country;

      if(country !== 'US' && country != '') {
        longitude = '';
        latitude = '';
      }

      bubbleShow(address.longitude, address.latitude);
      console.warn('ADDRESS.long', typeof(address.longitude) === "undefined")
      console.warn('longitude', longitude)

      $.ajax({
         type: 'post',
         cache: true, 
         url: "https://www.avalara.com/taxrates/en/state-rates/api/getRateForAddress/",
         data: {
            "latitude": latitude,
            "longitude": longitude,
            "line1": line1,
            "city": city,
            "region": region,
            "postalCode": postalCode,
            "country": country
         },
         statusCode: {
            400:function() {
              bubbleContent("We’re having trouble with that one.");
            }
         },
         error:function(xhr,textStatus,e) {
            bubbleContent("Error...unable to retrieve rate at this time");
         }, 
         success:function(response) {
            state.place = response
            state.location = {latitude:address.latitude, longitude:address.longitude};

            var details = state.place.summary;
            if (!details) {
              bubbleContent("We’re having trouble with that one.");
            } else {
               var rate = 0;
               $.each(details, function(index, juris) {
                  rate += juris.rate
               });
               bubbleContent(titlecase(details[details.length-1].jurisName) + ": " + precision(rate*100, 0, 4) + "%", "infobubbletext more");
               showInfo();
            }
         }
      });
   }

   // handler that is called when the user wants the device GPS or location to be read and placed on the map
   var findMe = function()
   {
      // Try W3C Geolocation (Preferred)
      if(navigator.geolocation) 
      {
         navigator.geolocation.getCurrentPosition(
            // success
            function(position) {
              var address = {longitude: position.coords.longitude, latitude: position.coords.latitude};
              findTaxRate(address);
              zoomMap(address.longitude,address.latitude,true);
            }, 
            // error!
            function(error) {
               switch(error.code) {
                  case error.PERMISSION_DENIED:
                     alert("Location services have been disabled. Activate location services for this application and/or device and try again, or touch map on desired location");
                     break;
                  case error.POSITION_UNAVAILABLE:
                     alert("Unable to determine location of this device, try again, or touch the map on desired location");
                     break;
                  case error.TIMEOUT:
                     alert("Timeout while trying to determine location of this device, try again, or touch map on desired location");
                     break;
                  default:
                     alert("Unknown error encountered while trying to determine location of this device, try again, or touch map on desired location");
               }
            }, 
            {maximumAge:60000, timeout:5000, enableHighAccuracy:true}
         );
      }
      // Browser doesn't support Geolocation
      else
      {
         alert("Your device does not support location services, touch map on desired location");
      }
   };

   // called when you are ready to load google maps
   var loadMap = function()
   {
      // options to load the map with
      var mapOptions = 
      {
         minZoom:3, 
         disableDefaultUI:true,
         center: new google.maps.LatLng(39.50, -98.35),
         zoom: 3,
         zoomControl:true, 
         draggable:true,
         styles: [{featureType:'poi', stylers:[{visibility:'off'}]}],
         zoomControlOptions:
         {
            position:google.maps.ControlPosition.RIGHT_BOTTOM,
            style:google.maps.ZoomControlStyle.DEFAULT
         },
         mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      // custom map options that wires up to the avalara tax tile server
      var taxTiles =
      {
         getTileUrl: function(coord, zoom)
         {
            var qkey = quadkey(coord.x, coord.y, zoom)
            return url['tiles' + (qkey % 4)] + qkey
         },
         opacity:    0.4,
         tileSize:   new google.maps.Size(256, 256),
         name:       "AvaTaxMap",
         alt:        "Avatax"
      };

      var findIt = function(e)
      { 
         $("input[name=query]").trigger('close.suggest').blur()
            
         var latlng = {lat: parseFloat(e.latLng.lat()), lng: parseFloat(e.latLng.lng())};
         resolveAddress(latlng);
         return false;
      };

      ui.map = new google.maps.Map(document.getElementById("map"), mapOptions);

      google.maps.event.addListener(ui.map, "click", findIt);
      google.maps.event.addListener(ui.map, "dblclick", function() { if(ui.bubble && ui.bubble.getDiv()) ui.bubble.close()});

      $(window).on("avatax.maptileson", function() {
         ui.map.overlayMapTypes.insertAt(0, new google.maps.ImageMapType(taxTiles));
      }).on("avatax.maptilesoff", function() {
         ui.map.overlayMapTypes.clear();
      }).trigger("avatax.maptileson");

      window.mapLoaded = null;
   };

   var loadAvatax = function()
   {
      // These UI components must wait for the map to be ready before handlers are attached to them
      $(window).on("avatax.mapready", function()
      {
   
         $("#main-top-locate").on("click", function(e){findMe()})
   
         $("#layer-satellite").on("click", function(e) {
            if($(this).hasClass("on"))
            {
               ui.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
            }
            else
            {
               ui.map.setMapTypeId(google.maps.MapTypeId.HYBRID);
            }
            $(this).toggleClass("on");
         })
   
         $("#layer-avatax").on("click", function(e)
         {
            if($(this).hasClass("on"))
            {
               $(window).trigger("avatax.maptilesoff");
            }
            else
            {
               $(window).trigger("avatax.maptileson");
            }
            $(this).toggleClass("on")
         })
      })
   }

   // handler that is called when app is initialized by some external trigger
   // phonegap triggers this event when the device is ready
   // webapp triggers this event when dom has loaded
   $(window).load(function(options) { 
      // if the state is not initialized, this is a first time
      if(!state.initialized)
      {
         // prepare as much of the UI as possible
         loadAvatax(); 

         // function to prepare UI dependend on map
         window.mapLoaded = function() {
            // info bubble extends a google maps class, so can't initialize it till map apis are loaded
            initializeInfoBubble();
            $(window).trigger("avatax.mapready");
            window.mapLoaded = null;
         }

         // load google map apis asynchronously
         var script = document.createElement("script");
         script.src = "https://maps.googleapis.com/maps/api/js?key=&callback=mapLoaded";
         script.type = "text/javascript";
         document.getElementsByTagName("body")[0].appendChild(script);
         state.initialized = true;
      }
   }).on("avatax.mapready", function() {
      loadMap();
   })
})
