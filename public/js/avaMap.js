// // tile urls
// var url = 
// {
//   tiles0: "https://0.tiles.avataxrates.com/tiles/", 
//   tiles1: "https://1.tiles.avataxrates.com/tiles/", 
//   tiles2: "https://2.tiles.avataxrates.com/tiles/", 
//   tiles3: "https://3.tiles.avataxrates.com/tiles/",
// };

// //TODO: just make map
// // ui elements that need to be global
// var ui = 
// {
//    map: null, 
// };

// // http://msdn.microsoft.com/en-us/library/bb259689.aspx
// // makes tax tiles layer
// function quadkey(tileX, tileY, detail) {
//    var key = "", range = Math.pow(2, detail);

//    // adjust tile coordinates if they wrap around (too big or negative direction)
//    tileX = tileX >= 0 ? tileX % range : range - (Math.abs(tileX) % range);
//    tileY = tileY >= 0 ? tileY % range : range - (Math.abs(tileY) % range);

//    for(var i = detail; i > 0; i--)
//    {
//       var digit   = 0;
//       var mask    = 1 << (i - 1);

//       if((tileX & mask) !== 0)
//       {
//          digit++;
//       }

//       if((tileY & mask) !== 0)
//       {
//          digit += 2;
//       }

//       key += digit.toString();
//    }

//    return key;
// };

// // called when you are ready to load google maps
// function loadMap() {

//    // options to load the map with
//    var mapOptions = 
//    {
//       minZoom:3, 
//       disableDefaultUI:true,
//       center: new google.maps.LatLng(39.50, -98.35),
//       zoom: 3,
//       zoomControl:true, 
//       draggable:true,
//       styles: [{featureType:'poi', stylers:[{visibility:'off'}]}],
//       zoomControlOptions:
//       {
//          position:google.maps.ControlPosition.RIGHT_BOTTOM,
//          style:google.maps.ZoomControlStyle.DEFAULT
//       },
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//    };

//    // custom map options that wires up to the avalara tax tile server
//    var taxTiles =
//    {
//       getTileUrl: function(coord, zoom)
//       {
//          var qkey = quadkey(coord.x, coord.y, zoom)
//          return url['tiles' + (qkey % 4)] + qkey
//       },
//       opacity:    0.4,
//       tileSize:   new google.maps.Size(256, 256),
//       name:       "AvaTaxMap",
//       alt:        "Avatax"
//    };

//    ui.map = new google.maps.Map(document.getElementById("map"), mapOptions);
//    var myLatLng = {lat: 33.6846603698176, lng: -117.850629887389};
   
//    var marker = new google.maps.Marker({
//       position: myLatLng,
//       map: ui.map,
//       title: 'Hello World!'
//    });
   
//     ui.map.overlayMapTypes.insertAt(0, new google.maps.ImageMapType(taxTiles));
// };
