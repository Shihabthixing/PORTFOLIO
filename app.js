
  // ------------------------ Scrolling Picture -------------------------//

function castParallax() {
    var opThresh = 350;
    var opFactor = 750;
  
    window.addEventListener("scroll", function (event) {
      var top = this.pageYOffset;
  
      var layers = document.getElementsByClassName("parallax");
      var layer, speed, yPos;
      
      for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute("data-speed");
        var yPos = -((top * speed) / 100);
        layer.setAttribute(
          "style",
          "transform: translate3d(0px, " + yPos + "px, 0px)"
        );
      }
    });
  }
  
  document.body.onload = castParallax();


  
  // ----------------------- Side Navigation Menu ----------------------------//


  $(document).ready(function(){

    $(".sidemenu-toggler").click(function(){
      $(".sidemenu").addClass("active");
    });

    $(".sidemenu-open-toggler").click(function(){
      $(".sidemenu").removeClass("active");
    })
  });


  
//---------------- Scroll Top Nav bar --------------//

window.onscroll = function() {scrollFuntion()};

var headerDiv = document.getElementById("wrap");
var logoDiv = document.getElementById("logo");
var menu = document.getElementById("menuDcrease");

      function scrollFuntion(){
        if (document.documentElement.scrollTop > 350){
              headerDiv.style.backgroundColor = "#131313ea";
              logoDiv.style.width ="100px";
              logoDiv.style.paddingTop = "3px";
              menu.style.top = "-2px";
              menu.style.fontSize = "14px"
              } 
              else{
              headerDiv.style.backgroundColor = "transparent";
              logoDiv.style.width ="150px";
              logoDiv.style.paddingTop = "15px";
              menu.style.top = "15px";
              menu.style.fontSize = "16px"
              }
        
      }