//rezise on scroll

window.addEventListener("resize", resizeScreen);
window.onload = resizeScreen;

//Resize
function scrollFunctionOnPhone() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logobar").style.height = "11.2em";
      document.getElementById("lvi").style.height = "195px";
      document.getElementById('rd-container').style.margin ="2%";
  } else {
    document.getElementById("logobar").style.height = "12.4em";
    document.getElementById("lvi").style.height = "220px";
    document.getElementById('rd-container').style.margin ="3%";
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logobar").style.height = "6em";
      document.getElementById("lvi").style.height = "160px";
      document.getElementById('rd-container').style.margin ="2%";
  } else {
    document.getElementById("logobar").style.height = "9em";
    document.getElementById("lvi").style.height = "240px";
    document.getElementById('rd-container').style.margin ="3%";
  }
}

function resizeScreen(){
  var screenSize = window.screen.width;
  if (screenSize < 576 ){
      window.onscroll = function() {scrollFunctionOnPhone()};
  }else {
      window.onscroll = function() {scrollFunction()};
  }
}
