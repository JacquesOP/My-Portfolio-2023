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

closeBtn.addEventListener("mouseover", navBtnHovered);
closeBtn.addEventListener("mouseleave", resetNavBtn);





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