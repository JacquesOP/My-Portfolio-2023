/*===== GSAP ANIMATION =====*/

// HOME
gsap.from(".header", {opacity: 0, duration: 1, delay: 2, x:30, stagger: 0.2});
gsap.from(".burger", {opacity: 0, duration: 1, delay: 2, x:30, stagger: 0.2});
gsap.from(".home__title", {opacity: 0, duration: 1, delay: 1.4, x:-60, stagger: 0.2});
gsap.from(".home__title2", {opacity: 0, duration: 1, delay: 1.8, y:30, stagger: 0.2});
gsap.from(".portfolio__updates-h2", {opacity: 0, duration: 1, delay: 1.6, x:-40, stagger: 0.2});
gsap.from(".portfolio__updates-h3", {opacity: 0, duration: 1, delay: 1.9, y:30, stagger: 0.2});
gsap.from(".catch", {opacity: 0, duration: 1, delay: 1.9, y:30, stagger: 0.2});

/*=============== GSAP ANIMATION ===============*/
// GSAP SrollTrigger

gsap.registerPlugin(ScrollTrigger)

const Scroll = new function() {
	let sections
	let page
	let main
	let scrollTrigger
	let tl
	let win
	
	// Init
	this.init = () => {
		sections = document.querySelectorAll('section')
		page = document.querySelector('#page')
		main = document.querySelector('main')
		win = {
			w: window.innerWidth,
			h: window.innerHeight
		}
		
		this.setupTimeline()
		this.setupScrollTrigger()
		window.addEventListener('resize', this.onResize)
	}
	
	// Setup ScrollTrigger
	this.setupScrollTrigger = () => {
		page.style.height = (this.getTotalScroll() + win.h) + 'px'
		
		scrollTrigger = ScrollTrigger.create({
			id: 'mainScroll',
			trigger: 'main',
			animation: tl,
			pin: true,
			scrub: true,
			snap: {
				snapTo: (value) => {
					
					let labels = Object.values(tl.labels)
					
					const snapPoints = labels.map(x => x / tl.totalDuration());
					const proximity = 0.1
					
					console.log(tl.labels , tl.totalDuration(), labels, snapPoints)
					
					for (let i = 0; i < snapPoints.length; i++) {
						if (value > snapPoints[i] - proximity && value < snapPoints[i] + proximity) {
							return snapPoints[i]
						}
					}
				},
				duration: { min: 0.2, max: 0.6 },
			},
			start: 'top top',
			end: '+=' + this.getTotalScroll(),
		})
	}
	
	// Setup timeline
	this.setupTimeline = () => {
		tl = gsap.timeline()
		tl.addLabel("label-initial")
		
		sections.forEach((section, index) => {
			const nextSection = sections[index+1]
			if (!nextSection) return

			tl.to(nextSection, {
				y: -1 * nextSection.offsetHeight,
				duration: nextSection.offsetHeight,
				ease: 'linear',
			})
			.addLabel(`label${index}`)
		})
	}
	
	// On resize
	this.onResize = () => {
		win = {
			w: window.innerWidth,
			h: window.innerHeight
		}
		
		this.reset()
	}
	
	// Reset
	this.reset = () => {
		if (typeof ScrollTrigger.getById('mainScroll') === 'object') {
			ScrollTrigger.getById('mainScroll').kill()
		}
		
		if (typeof tl === 'object') {
			tl.kill()
			tl.seek(0)
		}
		
		document.body.scrollTop = document.documentElement.scrollTop = 0
		this.init()
	}
	
	// Get total scroll
	this.getTotalScroll = () => {
		let totalScroll = 0
		sections.forEach(section => {
			totalScroll += section.offsetHeight
		})
		totalScroll -= win.h
		return totalScroll
	}
}

Scroll.init()





/*=============== GSAP ANIMATION ===============*/
// GSAP to

gsap.registerPlugin(ScrollToPlugin)

const scrollButton1 = document.querySelector('#home-link');
const scrollButton2 = document.querySelector('#about-link');
const scrollButton3 = document.querySelector('#skills-link');
const scrollButton4 = document.querySelector('#projects-link');
const scrollButton5 = document.querySelector('#contact-link');

const section1 = document.querySelector('#home');
const section2 = document.querySelector('#about');
const section3 = document.querySelector('#skills');
const section4 = document.querySelector('#projects');
const section5 = document.querySelector('contact');



scrollButton1.addEventListener('click', (e) => {

	gsap.to(window, {
	  duration: 3,
	  scrollTo: 0,
	  ease: "sin.inOut"
	});
	e.preventDefault();
});


scrollButton2.addEventListener('click', (e) => {

	gsap.to(window, {
	  duration: 3,
	  scrollTo: 1318,
	  ease: "sin.inOut"
	});
	e.preventDefault();
});


scrollButton3.addEventListener('click', (e) => {

	gsap.to(window, {
	  duration: 3,
	  scrollTo: 2636,
	  ease: "sin.inOut"
	});
	e.preventDefault();
});


scrollButton4.addEventListener('click', (e) => {

	gsap.to(window, {
	  duration: 3,
	  scrollTo: 3954,
	  ease: "sin.inOut"
	});
	e.preventDefault();
});


scrollButton5.addEventListener('click', (e) => {

  	gsap.to(window, {
    	duration: 3,
    	scrollTo: "max",
		ease: "sin.inOut"
  });
  e.preventDefault();
});

