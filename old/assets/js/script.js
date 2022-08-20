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

var form = document.getElementById("form");

async function handleSubmit(event) {
  event.preventDefault();

  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        const status = document.getElementById("status");
        const phrases = ["Submitted.", "Get In Touch"];
        let i = 0;
        let j = 0;
        let k = 0;
        let currentPhrase = [];
        let isDeleting = false;
        let isEnd = false;
        function loop() {
          isEnd = false;
          status.innerHTML = currentPhrase.join("");
          k++;
          console.log(k);
          if (i < phrases.length) {
            if (k > 32) {
              return;
            }
            if (!isDeleting && j <= phrases[i].length) {
              currentPhrase.push(phrases[i][j]);
              j++;
              status.innerHTML = currentPhrase.join("");
            }

            if (isDeleting && j <= phrases[i].length) {
              currentPhrase.pop(phrases[i][j]);
              j--;
              status.innerHTML = currentPhrase.join("");
            }

            if (j == phrases[i].length) {
              isEnd = true;
              isDeleting = true;
            }

            if (isDeleting && j === 0) {
              currentPhrase = [];
              isDeleting = false;
              i++;
              if (i === phrases.length) {
                i = 0;
              }
            }
          }
          const spedUp = Math.random() * (80 - 50) + 50;
          const normalSpeed = Math.random() * (300 - 200) + 200;
          const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
          setTimeout(loop, time);
        }

        loop();
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            const status = document.getElementById("status");
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            const status = document.getElementById("status");
            const phrases = ["Error.", "Get In Touch"];
            let i = 0;
            let j = 0;
            let k = 0;
            let currentPhrase = [];
            let isDeleting = false;
            let isEnd = false;
            function loop() {
              isEnd = false;
              status.innerHTML = currentPhrase.join("");
              k++;
              if (i < phrases.length) {
                if (k > 24) {
                  return;
                }
                if (!isDeleting && j <= phrases[i].length) {
                  currentPhrase.push(phrases[i][j]);
                  j++;
                  status.innerHTML = currentPhrase.join("");
                }

                if (isDeleting && j <= phrases[i].length) {
                  currentPhrase.pop(phrases[i][j]);
                  j--;
                  status.innerHTML = currentPhrase.join("");
                }

                if (j == phrases[i].length) {
                  isEnd = true;
                  isDeleting = true;
                }

                if (isDeleting && j === 0) {
                  currentPhrase = [];
                  isDeleting = false;
                  i++;
                  if (i === phrases.length) {
                    i = 0;
                  }
                }
              }
              const spedUp = Math.random() * (80 - 50) + 50;
              const normalSpeed = Math.random() * (300 - 200) + 200;
              const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
              setTimeout(loop, time);
            }

            loop();
          }
        });
      }
    })
    .catch((error) => {
      const status = document.getElementById("status");
      const phrases = ["Error.", "Get In Touch"];
      let i = 0;
      let j = 0;
      let k = 0;
      let currentPhrase = [];
      let isDeleting = false;
      let isEnd = false;
      function loop() {
        isEnd = false;
        status.innerHTML = currentPhrase.join("");
        k++;
        if (i < phrases.length) {
          if (k > 24) {
            return;
          }
          if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            status.innerHTML = currentPhrase.join("");
          }

          if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
            status.innerHTML = currentPhrase.join("");
          }

          if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
          }

          if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
              i = 0;
            }
          }
        }
        const spedUp = Math.random() * (80 - 50) + 50;
        const normalSpeed = Math.random() * (300 - 200) + 200;
        const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
        setTimeout(loop, time);
      }

      loop();
    });
}
form.addEventListener("submit", handleSubmit);
