document.getElementsByClassName("hamburger-menu")[0].onclick = function(e) {
  document
    .getElementsByClassName("hamburger-menu")[0]
    .classList.toggle("close");
  document.getElementsByClassName("site-branding")[0].classList.toggle("hide");
  document
    .getElementsByClassName("site-navigation")[0]
    .classList.toggle("show");
  document
    .getElementsByClassName("site-header")[0]
    .classList.toggle("no-shadow");
};
