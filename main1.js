document.getElementById("menu").addEventListener("click", openMenu);

function openMenu () {
  document.getElementById("dropdown").classList.toggle("active");
}

var about = document.querySelector(".about");
var projects = document.querySelector(".projects");
var contact = document.querySelector(".contact");
var aboutAni1 = document.getElementsByTagName("h1");
var aboutAni2 = document.getElementsByTagName("p");

function aboutChange (){
  about.onclick = function(){
    aboutAni1[1].style.color = "blue";
    aboutAni2[1].style.color = "blue";
  }
};

aboutChange();

function projectsChange (){
  projects.onclick = function(){
    aboutAni1[2].style.color = "blue";
  }
};

projectsChange();

function contactChange (){
  contact.onclick = function(){
    aboutAni1[3].style.color = "blue";
  }
};

contactChange();
