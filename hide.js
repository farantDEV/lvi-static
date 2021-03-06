// When the user scrolls down 50px from the top of the document, resize the header's font size
window.addEventListener('resize', resizeOnScroll);

function resizeOnScroll() {
  if (window.matchMedia("(max-width: 575.98px)").matches){
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
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

  }else {
    window.onscroll = function() {scrollFunction()};

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

  }

}
