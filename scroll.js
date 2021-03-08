//rezise on scroll
window.onload = resizeScreen;
window.addEventListener("resize", resizeScreen);

//Resize
function scrollFunctionOnPhone() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topBar").style.height = "9.5rem";
    document.getElementById("downSolid").style.height = "0";
    document.getElementById("lvi").style.marginTop = "4rem";
    document.getElementById("lvi").style.width = "12rem";
    //document.getElementById('logobar').style.margin ="0";
    document.getElementById('headerBtn').style.margin ="0.5rem 0";
  } else {
    document.getElementById("topBar").style.height = "24rem";
    document.getElementById("downSolid").style.height = "29rem";
    document.getElementById("lvi").style.marginTop = "15rem";
    document.getElementById("lvi").style.width = "20rem";
    //document.getElementById('logobar').style.margin ="1rem 0";
    document.getElementById('headerBtn').style.margin ="25rem 10rem";
  }
}

function scrollFunctionOnTab() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topBar").style.height = "8rem";
    document.getElementById("downSolid").style.height = "0";
    document.getElementById("lvi").style.marginTop = "0";
    document.getElementById("lvi").style.width = "17rem";
    //document.getElementById('logobar').style.margin ="0.5rem 0";
    document.getElementById('headerBtn').style.margin ="1rem 0";
  } else {
    document.getElementById("topBar").style.height = "25rem";
      document.getElementById("downSolid").style.height = "39rem";
    document.getElementById("lvi").style.marginTop = "15rem";
    document.getElementById("lvi").style.width = "23rem";
    //document.getElementById('logobar').style.margin ="1rem 0";
    document.getElementById('headerBtn').style.margin ="23rem";

  }
}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topBar").style.height = "5.5em";
    document.getElementById("downSolid").style.height = "0";
    document.getElementById("lvi").style.width = "12rem";
    document.getElementById('logobar').style.margin ="-4rem 3rem";
    document.getElementById('headerBtn').style.margin ="1rem";
  } else {
    document.getElementById("topBar").style.height = "17rem";
    document.getElementById("downSolid").style.height = "29rem";
    document.getElementById("lvi").style.width = "40rem";
    document.getElementById('logobar').style.margin ="3rem 0";
    document.getElementById('headerBtn').style.margin =" 20rem 50rem";
  }
}

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
