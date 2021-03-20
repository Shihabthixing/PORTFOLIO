
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


  // var headerContaine = document.getElementById("wrap");
  // window.onscroll = function(){scrollFuntion()};

  // function scrollFuntion(){
  //   if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
  //     headerContaine.style.background = "#131313ea";
  //   }
  // }


  //---------------- Auto Typing h2 --------------//


$("#autoType").typer({
  strings: [
    "Des Lorem Ipusm", "3d samples", "We magenet"
  ]
});

$("#autoType").typer({
  
  typeSpeed: 60,
  backspaceSpeed: 20,
  backspaceDelay: 800,
  repeatDelay: 1000,
  repeat:true,
  autoStart: true,
  startDelay: 100,
});

$("#autoType").typer({
  useCursor:true
});
