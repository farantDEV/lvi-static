document.addEventListener('DOMContentLoaded', function () {

	document.getElementById('allSite').style.opacity = "1";

});

//rezise on scroll
window.onload = resizeScreen;
window.addEventListener("resize", resizeScreen);

function resizeScreen(){
  var screenSize = window.innerWidth;
  if (screenSize < 576 ){
      window.onscroll = function() {scrollFunctionOnPhone()};
  }else if (screenSize >= 576 && screenSize < 1199 ){
      window.onscroll = function() {scrollFunctionOnTab()};
  }else {
      window.onscroll = function() {scrollFunction()};
  }
}
window.onresize = resizeScreen;
//Resize
function scrollFunctionOnPhone() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topBar").style.height = "4.5rem";
    document.getElementById("downSolid").style.height = "0";
    document.getElementById("lvi").style.marginTop = "0";
    document.getElementById("lvi").style.width = "0";
    //document.getElementById('logobar').style.margin ="0";
    document.getElementById('headerBtn').style.margin ="0.5rem 0";
  } else {
    document.getElementById("topBar").style.height = "24rem";
    document.getElementById("downSolid").style.height = "100%";
    document.getElementById("lvi").style.marginTop = "15rem";
    document.getElementById("lvi").style.width = "20rem";
    //document.getElementById('logobar').style.margin ="1rem 0";
    document.getElementById('headerBtn').style.margin ="1rem 25rem";
  }
}

function scrollFunctionOnTab() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topBar").style.height = "6rem";
    document.getElementById("downSolid").style.height = "0";
    document.getElementById("lvi").style.marginTop = "0";
    document.getElementById("lvi").style.width = "13rem";
    document.getElementById('logobar').style.opacity ="1";
    document.getElementById('headerBtn').style.margin ="1rem";
		document.getElementById('social-icon-container').style.opacity ="1";
  } else {
    document.getElementById("topBar").style.height = "25rem";
      document.getElementById("downSolid").style.height = "100%";
    document.getElementById("lvi").style.marginTop = "15rem";
    document.getElementById("lvi").style.width = "23rem";
    document.getElementById('logobar').style.opacity ="0";
    document.getElementById('headerBtn').style.margin ="1rem 48rem";
		  document.getElementById('social-icon-container').style.opacity ="0";
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topBar").style.height = "5.5em";
    document.getElementById("downSolid").style.height = "0";
		document.getElementById("downSolid").style.opacity = "0";
		document.getElementById("lvi").style.marginTop = "0";
    document.getElementById("lvi").style.width = "12rem";
    document.getElementById('logobar').style.opacity ="1";
    document.getElementById('headerBtn').style.margin ="1rem";
    document.getElementById('social-icon-container').style.opacity ="1";
  } else {
    document.getElementById("topBar").style.height = "17rem";
    document.getElementById("downSolid").style.height = "100%";
		document.getElementById("downSolid").style.opacity = "1";
    document.getElementById("lvi").style.width = "40rem";
    document.getElementById('logobar').style.opacity ="0";
    document.getElementById('headerBtn').style.margin =" 1rem 95rem";
    document.getElementById('social-icon-container').style.opacity ="0";
  }
}
