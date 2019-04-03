$(function()
{
   var orientation;

   var doneTurn = function(height)
   {
        height = $(window).height();
        setTimeout(function() { doneTurn(height); }, 500);
   };

   var checkTurn = function()
   {
      if(orientation != window.orientation)
      {
        var height = $(window).height();
        orientation = window.orientation;
        setTimeout(function() { doneTurn(height); }, 500);
      }
   };

   // only hide the address bar on www (android and ios mobile in particular...)
   if("ontouchstart" in window)
   {
      $(window).bind("orientationchange", checkTurn);
   }

   // the web version is very simple to initialize, wait for the domready and GO!
   $(window).trigger("avatax.initialize");
});
