window.onload = function () {
  window.setTimeout(fade_out, 500);
};

function fade_out() {
  document.querySelector(".preloader").classList.add("hidden");
  window.setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 800);
}

AOS.init();

let navbarToggler = document.querySelector(".mobile-menu-btn");
navbarToggler.addEventListener("click", function () {
  navbarToggler.classList.toggle("active");
});

$(window).scroll(function () {
  var topWindow = $(window).scrollTop();
  var topWindow = topWindow * 1.5;
  var windowHeight = $(window).height();
  var position = topWindow / windowHeight;
  position = 1 - position;
  console.log(position);
  if (position < 1) {
    $(".scroll-indicator").css("opacity", 0);
  } else {
    $(".scroll-indicator").css("opacity", 1);
  }
});
