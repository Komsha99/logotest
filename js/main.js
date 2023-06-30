const menuBtn = document.querySelector('.activate');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.parentNode.classList.add('open');
    menuBtn.parentNode.classList.remove('close');
    setTimeout(function(){
    menuOpen = true;
    menuBtn.parentNode.classList.remove('close');
    }, 500);
    menuBtn.parentNode.classList.remove('close');
  } else {
    menuBtn.parentNode.classList.remove('open');
    setTimeout(function(){
      menuBtn.parentNode.classList.add('close')
      menuOpen = false;
    }, 500);
  }
});
const body = document.querySelector("body"),
    toggle = document.querySelector(".toggle");
        let getMode = localStorage.getItem("mode")
        if (getMode && getMode === "light") {
          body.classList.add("light");
          toggle.classList.add("active");
        }
    toggle.addEventListener("click", () => {
      body.classList.toggle("light");
        if(!body.classList.contains("light")){
          return localStorage.setItem("mode", "dark");
        }
          localStorage.setItem("mode", "light");
    })
    toggle.addEventListener("click", () => toggle.classList.toggle("active"));