window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20) {
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.right = "0";
    document.getElementById("navbar").style.left = "0";
    document.getElementById("navbar").style.height = "80px";
  }
  else {
    document.getElementById("navbar").style.position = "relative";
    document.getElementById("navbar").style.height = "100px";
    document.getElementById("navbar").style.top = "0px";

  } 
}