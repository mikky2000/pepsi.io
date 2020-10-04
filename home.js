
function imgSlider(anything){
    document.querySelector('.pepsiCan').src=anything;
}

function changeBgColor(color){
    const sec = document.querySelector('.container');
    sec.style.background = color;
}

var MenuBtn = document.getElementById('mobile_menu');
var MenuDisplayMobile = document.querySelector('.MenuDisplay');


$(document).ready(function(){
    $(MenuBtn).click(function(){
      $(MenuDisplayMobile).animate({
        width: "toggle"
      });
    });
  });


