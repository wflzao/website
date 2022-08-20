let before = document.getElementById("before");
const liner = document.getElementById("liner");
const command = document.getElementById("typer");
const textarea = document.getElementById("texter");
const terminal = document.getElementById("terminal");
const words = ["Type help for commands..."];
let timeoutID;
let helped = 0;
let i = 0;
let timer;
let git = 0;
let pw = false;
let pwd = false;
let commands = [];
if (window.innerWidth < 750) {
  alert("Please turn your phone sideways for better experience.");
}

setTimeout(function () {
  addLine(`~ <span style=${accent}>/ </span> fet.sh`, "", 80);
  addLine(`<br>`, "", 80);
  setTimeout(function () {
    loopLines(fetch, "", 80);
  }, 85);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine(
        `~ <span style=${accent}>/</span> ` + command.innerHTML,
        "no-animation",
        0
      );
      addLine("<br>", "", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  resetTimer();
  if (helped == 1) {
    deletingEffect();
    helped = 2;
  }
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "margin", 80);
      break;
    case "whois":
      loopLines(whois, "margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "margin", 80);
      break;
    case "socials":
      loopLines(socials, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "history":
      loopLines(commands, "color2", 80);
      addLine("<br>", "", 80 * commands.length + 50);
      break;
    case "email":
      addLine(
        'Opening mailto:<a href="mailto:wafflemain@protonmail.com">wafflemain@protonmail.com</a>...',
        "color2",
        0
      );
      addLine("<br>", "", 0);
      newTab(email);
      break;
    case "clear":
      setTimeout(function () {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "fet.sh":
      loopLines(fetch, "", 80);
      break;
    case "web.old":
      addLine("Opening old website...", "color2", 0);
      addLine("<br>", "", 0);
      window.open("/old/index.html");
      break;
    // socials
    case "youtube":
      addLine("Opening YouTube...", "color2", 0);
      addLine("<br>", "", 0);
      newTab(youtube);
      break;
    case "twitter":
      addLine("Opening Twitter...", "color2", 0);
      addLine("<br>", "", 0);
      newTab(twitter);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      addLine("<br>", "", 0);
      newTab(instagram);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      addLine("<br>", "", 0);
      newTab(github);
      break;
    default:
      addLine(
        "<span>Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>",
        "error",
        100
      );
      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  let t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    let next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;
    next.id = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}

function setup() {
  this.addEventListener("keypress", resetTimer, false);
  startTimer();
}
setup();

function startTimer() {
  timeoutID = window.setTimeout(goInactive, 5000);
}

function resetTimer() {
  window.clearTimeout(timeoutID);
}
function goInactive() {
  if (helped == 0) {
    addLine(words[0], "helper", 0);
    helped = 1;
  }
}

function goActive() {
  if (helped == 0) {
    startTimer();
  } else {
    return;
  }
}
function deletingEffect() {
  let word = words[i].split("");
  let loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("helper").innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      return false;
    }
    timer = setTimeout(loopDeleting, 0.1);
  };
  loopDeleting();
}
