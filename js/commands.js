let youtube = "https://www.youtube.com/channel/UCBKIre3WUGLh4Vb_JG_wIwA/";
let twitter = "https://www.twitter.com/wflzao/";
let instagram = "https://www.instagram.com/wflzao/";
let github = "https://github.com/wflzao/";
let githubRepos = "https://github.com/wflzao?tab=repositories ";
let email = "mailto:wafflemain@protonmail.com";
const date = new Date();
let day = date.getDay();
let accent;
let userAgent = navigator.userAgent;
let browserName;
let Name = "Not known";
const r = document.querySelector(":root");
let ram = navigator.deviceMemory;
let hostname = location.hostname;

if (userAgent.indexOf("Win") != -1) Name = "win";
if (userAgent.indexOf("Mac") != -1) Name = "mac";
if (userAgent.indexOf("X11") != -1) Name = "unix";
if (userAgent.indexOf("Linux") != -1) Name = "linux";

if (userAgent.match(/chrome|chromium|crios/i)) {
  browserName = "chrome";
} else if (userAgent.match(/firefox|fxios/i)) {
  browserName = "firefox";
} else if (userAgent.match(/safari/i)) {
  browserName = "safari";
} else if (userAgent.match(/opr\//i)) {
  browserName = "opera";
} else if (userAgent.match(/edg/i)) {
  browserName = "edge";
} else {
  browserName = "No browser detection";
}

if (ram == undefined) {
  ram = "N/A";
}

if (day == 0) {
  accent = "color:#f2777a";
  changeColor("f2777a");
} else {
  if (day == 1) {
    accent = "color:#f9a270";
    changeColor("f9a270");
  } else {
    if (day == 2) {
      accent = "color:#ffcc66";
      changeColor("ffcc66");
    } else {
      if (day == 3) {
        accent = "color:#99cc99";
        changeColor("99cc99");
      } else {
        if (day == 4) {
          accent = "color:#66cccc";
          changeColor("66cccc");
        } else {
          if (day == 5) {
            accent = "color:#6699cc";
            changeColor("6699cc");
          } else {
            if (day == 6) {
              accent = "color:#cc99cc";
              changeColor("cc99cc");
            }
          }
        }
      }
    }
  }
}

whois = [
  "<br>",
  "Hey there, I am Waffle, usually refered to as wfl.",
  "I'm a computer enthusiast since 2018, and i live in Minas Gerais, Brazil. ",
  "I'm currently a student in middle school, and I'm also studying computer science by myself.",
  "I possibly want to seek for developer jobs in the future, so I can get some good money while still at high school.",
  "Besides that, I also like to play piano and basketball.",
  "<br>",
];

whoami = [
  "<br>",
  "You're a human. Right?                         right??????",
  "<br>",
];

social = [
  "<br>",
  'youtube        <a class="link" href="' +
    youtube +
    '" target="_blank">youtube/wflzao' +
    "</a>",
  'twitter        <a class="link" href="' +
    twitter +
    '" target="_blank">twitter/wflzao' +
    "</a>",
  'instagram      <a class="link" href="' +
    instagram +
    '" target="_blank">instagram/wflzao' +
    "</a>",
  'github         <a class="link" href="' +
    github +
    '" target="_blank">github/wflzao' +
    "</a>",
  "<br>",
];

projects = [
  "<br>",
  '<a class="link" href="' +
    githubRepos +
    '" target="_blank">github/wflzao/repos' +
    "</a>",
  "<br>",
];

help = [
  "<br>",
  '<span class="command">whois</span>          Who is Waffle?',
  '<span class="command">whoami</span>         Why ask?',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           I wonder what this does',
  '<span class="command">email</span>          Do not email me',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">fet.sh</span>         Display the fetch',
  "<br>",
];

fetch = [
  `   guest@waffle.tk`,
  `   <span style=${accent}>os</span> ~ ${Name}`,
  `   <span style=${accent}>sh</span> ~ wflsh`,
  `   <span style=${accent}>wm</span> ~ ${browserName}`,
  `  <span style=${accent}>ram</span> ~ ${ram}`,
  ` <span style=${accent}>&nbsphost</span> ~ ${hostname}`,
  `  <span style=${accent}>ver</span> ~ 1.0`,
  `<span style=${accent}>&nbsppkgs</span> ~ 13552`,
  `<span style=${accent}>&nbspterm</span> ~ wflterm`,
  `<span style="color:#f2777a;font-size:21.5px">&nbsp▅</span><span style="color:#f9a270;font-size:21.5px;margin-left:-.5px">▅</span><span style="color:#ffcc66;font-size:21.5px;margin-left:-.5px">▅</span><span style="color:#99cc99;font-size:21.5px;margin-left:-.5px">▅</span><span style="color:#66cccc;font-size:21.5px;margin-left:-.5px">▅</span><span style="color:#6699cc ;font-size:21.5px;margin-left:-.5px">▅</span><span style="color:#cc99cc;font-size:21.5px;margin-left:-.5px">▅</span>`,
  `<br>`,
];

function changeColor(color) {
  r.style.setProperty("--accent", `#${color}`);
}