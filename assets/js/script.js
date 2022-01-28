window.onload = function () {
  $("html, body").animate({ scrollTop: 0 }, "fast");
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
  if (position < 1) {
    $(".scroll-indicator").css("opacity", 0);
  } else {
    $(".scroll-indicator").css("opacity", 1);
  }
});

function anchorJump(anchor) {
  let url = location.href;
  location.href = "#" + anchor;
  history.replaceState(null, null, url);
}

function active() {
  $("html, body").animate({ scrollTop: 0 }, "fast");
}

$(function () {
  function sendData($form) {
    let dataString = $form.serialize();

    return $.ajax({
      type: "POST",
      url: "/assets/php/message.php",
      data: dataString,
    });
  }

  $("form").on("submit", function (e) {
    e.preventDefault();

    sendData($(this)).done(function () {
      $("#h3").html("<h2>submitted</h2>").hide();
    });
  });
});
