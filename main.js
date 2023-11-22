/*=============== GET CURRENT DATE AND HOURS ===============*/

const date = document.getElementById("date-h2");
const timeZone = document.getElementById("current-time");

/**
 * 
 * @param {Date} date  
*/
const formatTime = (date) =>{
    let hours12 = date.getHours() % 24 || 24;
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    const isAm = date.getHours() < 12 ;

    if(hours12 === 24){
        hours12 = 0;
    }

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secondes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
 
}

/**
 * 
 * @param {Date} date  
*/
const formatDate = (date) =>{

    const days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
};

setInterval(() =>{
    const now = new Date();
    date.innerHTML = formatDate(now);
    timeZone.innerHTML = formatTime(now);
}, 200);





/*=============== CURSOR Interactivity ===============*/

const mouseCursor1 = document.querySelector('.cursor__1');
const allLinks = document.querySelectorAll("a");


window.addEventListener('mousemove', cursor);

function cursor(e){
    const posX = e.clientX;
    const posY = e.clientY;

    mouseCursor1.style.left = `${posX}px`;
    mouseCursor1.style.top = `${posY}px`;
}

function linkGrow(){
    mouseCursor1.classList.add('link-grow');
}

function linkShrink(){
    mouseCursor1.classList.remove('link-grow');
}

allLinks.forEach(link =>{
    link.addEventListener("mouseover", linkGrow);
    link.addEventListener("mouseleave", linkShrink);
})






/*=============== MENU Interactivity ===============*/

const menuBtn = document.getElementById("burger");
const closeBtn = document.getElementById("close-btn");
const header = document.getElementById("header");
const navlinks = document.querySelectorAll(".nav__links");
const profileBtn = document.getElementById("link-logo");
const section = document.querySelectorAll('section');


// MENU SHOW and HIDE

const showMenu = (e) =>{

    gsap.to(".header", {
        duration: 1,
        x: -510,
        ease: "sin.inOut"
    });
    closeBtn.hidden = 'True';
    menuBtn.classList.add('burger__hide');
    e.preventDefault();
    
}

const hideMenu = (e) =>{
    
    gsap.to(".header", {
        duration: .5,
        x: 500,
        ease: "sin.inOut"
    });
    // e.preventDefault(); // the link probleme issue origin ?
    menuBtn.classList.remove('burger__hide');
}

/*===== MENU SHOW =====*/
if(menuBtn){
    menuBtn.addEventListener("click", showMenu);
}

/*===== MENU HIDDEN =====*/
if(closeBtn){
    closeBtn.addEventListener("click", hideMenu);
}

section.forEach(section =>{
    section.addEventListener('click', hideMenu);
})

navlinks.forEach(link =>{
	link.addEventListener('click', hideMenu);
})

menuBtn.addEventListener("mouseover", navBtnHovered);
menuBtn.addEventListener("mouseleave", resetNavBtn);





/*===== Smooth Scroll =====*/

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
