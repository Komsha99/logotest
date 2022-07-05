const menuBtn = document.querySelector('.activate');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.parentNode.classList.add('open');
    menuBtn.parentNode.classList.remove('close');
    setTimeout(function(){
    menuOpen = true;
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
