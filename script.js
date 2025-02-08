let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Text Code

const typed = new Typed('.multiple-text', {
    strings: ['Student at SFU', 'Computer Science Undergraduate', '2nd Year Student' , 'New Coder' ,'Canadian', 'Coffee Lover'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay:1200,
    loop: true,
  });