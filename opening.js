window.onload = resizeScreen;
window.addEventListener("resize", resizeScreen);

const logoBtn = document.getElementById('logoBtn');

document.logoBtn.addEventListener('onclick', function(event){
  event.preventDefault();
  alert("ok");

});

/* function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topBar").style.height = "5.5em";
    document.getElementById("downSolid").style.height = "0";
    document.getElementById("lvi").style.width = "12rem";
    document.getElementById('logobar').style.margin ="-4rem 3rem";
    document.getElementById('headerBtn').style.margin ="1rem";
  } else {
    document.getElementById("topBar").style.height = "22rem";
    document.getElementById("downSolid").style.height = "24rem";
    document.getElementById("lvi").style.width = "50rem";
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
}*/
