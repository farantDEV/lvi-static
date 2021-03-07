//rezise on scroll

window.addEventListener("resize", resizeScreen);
window.onload = resizeScreen;

//Resize
function scrollFunctionOnPhone() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topBar").style.height = "9.5rem";
    document.getElementById("lvi").style.width = "15rem";
    document.getElementById("lvi").style.left = "15%";
    document.getElementById('logobar').style.margin ="0";
      document.getElementById('headerBtn').style.margin ="0.5rem 0";
  } else {
    document.getElementById("topBar").style.height = "12.4rem";
    document.getElementById("lvi").style.width = "20rem";
    document.getElementById("lvi").style.left = "5%";
    document.getElementById('logobar').style.margin ="1rem 0";
    document.getElementById('headerBtn').style.margin ="1.5rem 0 1.5rem 1.5rem";
  }
}

function scrollFunctionOnTab() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topBar").style.height = "9rem";
      document.getElementById("lvi").style.width = "17rem";
      document.getElementById("lvi").style.left = "30%";
      document.getElementById('logobar').style.margin ="0.5rem 0";
      document.getElementById('headerBtn').style.margin ="1rem 0";
  } else {
    document.getElementById("topBar").style.height = "12rem";
    document.getElementById("lvi").style.width = "23rem";
    document.getElementById("lvi").style.left = "25%";
    document.getElementById('logobar').style.margin ="1rem 0";
    document.getElementById('headerBtn').style.margin ="1.5rem 0 1.5rem 1.5rem";

  }
}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topBar").style.height = "8em";
      document.getElementById("lvi").style.width = "17rem";
      document.getElementById("lvi").style.left = "40%";
      document.getElementById('logobar').style.margin ="0.5rem 0";
      document.getElementById('headerBtn').style.margin ="1rem 0";
  } else {
    document.getElementById("topBar").style.height = "12rem";
    document.getElementById("lvi").style.width = "27rem";
    document.getElementById("lvi").style.left = "35%";
    document.getElementById('logobar').style.margin ="3rem 0";
    document.getElementById('headerBtn').style.margin ="3.5rem 0 3.5rem 3.5rem";
  }
}

function resizeScreen(){
  var screenSize = window.screen.width;
  if (screenSize < 576 ){
      window.onscroll = function() {scrollFunctionOnPhone()};
  }else if (screenSize >= 576 && screenSize < 1199 ){
      window.onscroll = function() {scrollFunctionOnTab()};
  }else {
    window.onscroll = function() {scrollFunction()};
  }
}
