'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');
const section4 = document.querySelector('.section--sign-up');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////
//////// Page.navigation
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth' });
//   })
// })

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();
  // console.log(e.target);
  // Matching strategy
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth' });
  }

})

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(tab => tab.addEventListener('click', () =>
//   console.log(tab)
// ));

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //Guard class
  if(!clicked) return;
  const clickeNb = clicked.getAttribute('data-tab')
  const contentToDisplay = document.querySelector('.operations__content--'+clickeNb);
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(tab => tab.classList.remove('operations__content--active'));
  contentToDisplay.classList.add('operations__content--active');
})

// Menu fade animation
const navBar = document.querySelector('.nav');

const handleOver = function(e, opacity) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    console.log(siblings);
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if(el != link) {
        el.style.opacity = opacity;
      }
    })
    logo.style.opacity = opacity;
  }
}

navBar.addEventListener('mouseover', function(e) {
  handleOver(e, 0.5);
});

navBar.addEventListener('mouseout', function(e) {
  handleOver(e, 1)
});

//196. Sticky Navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function() {
//   // console.log(window.scrollY);
//   if(window.scrollY > initialCoords.top)
//   navBar.classList.add('sticky')
//   else 
//   navBar.classList.remove('sticky')
// })


//197. Sticky navigation with Intersection Observer API
// Event is created when 10% (thresold: 0.1) of section is intersected window (root:null)
// const obsCallback = function(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root : null,
//   threshold: [0, 0.2]
// }
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header =document.querySelector('.header');
const NavBarHeight = navBar.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries;
  // console.log(entry);
  // console.log(observer);
  if (!entry.isIntersecting) 
    navBar.classList.add('sticky');
  else 
    navBar.classList.remove('sticky');
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-'+NavBarHeight+'px'
});
headerObserver.observe(header);

//198. Revealing section on Scroll
// const sections = [section1, section2, section3, section4];
const sections = document.querySelectorAll('.section');
// console.log(sections);

const RevealSection = function(entries) {
  const [entry] = entries;
  // console.log(entry);
  if (entry.isIntersecting) 
  entry.target.classList.remove('section--hidden');
  headerObserver.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(RevealSection, {
  root: null,
  threshold: 0.15
});

sections.forEach(section => {
  // console.log(section);
  // section.classList.add('section--hidden');
   sectionObserver.observe(section);
});


// 199. Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const LoadImage = function(entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  //Reaplce src with data-src
  console.log(entry.target);
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {    
    entry.target.classList.remove('lazy-img');
  })
  imageObserver.unobserve(entry.target);
}

const imageObserver = new IntersectionObserver(LoadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(imgTarget => {
  imageObserver.observe(imgTarget)
})

// 200+201 Slider

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.2)';
// slider.style.overflow = 'visible';

const slides = document.querySelectorAll('.slide');
slides.forEach((s, i) => s.style.transform = `translateX(${100*i}%)`);

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
let currSlide = 0;
let translate = 0;
const maxSlide = slides.length - 1;

const createDots = function () {
  slides.forEach(function (s,i) {
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button`);
  })
}

const activateDot = function(slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}

const nextSlide = function () {
  if (currSlide === maxSlide) {
    currSlide = 0; 
    translate = maxSlide*100;
  }  else {
    currSlide++;
    translate = -100;
  }
  slides.forEach((s, i) => {
    // Retrieve current value and - 100% except if reach the last slide
    let currTranslate = s.style.transform.match(/translateX\((\S+)%\)/)[1];
    s.style.transform = `translateX(${Number(currTranslate)+translate}%)`;
  })
  activateDot(currSlide);
}

const prevSlide = function() {
  if (currSlide === 0) {
    currSlide = maxSlide; 
    translate = -1*(maxSlide)*100;
  }  else {
    currSlide--;
    translate = 100;
  }
  slides.forEach((s, i) => {
    // Retrieve current value and + 100% except if reach the last slide
    let currTranslate = s.style.transform.match(/translateX\((\S+)%\)/)[1];
    s.style.transform = `translateX(${Number(currTranslate)+translate}%)`;
  })
  activateDot(currSlide);
}

const init = function() {
  createDots();
  activateDot(0);
}
init ();

// Event Handlers
btnRight.addEventListener('click', nextSlide)

btnLeft.addEventListener('click', prevSlide)

document.addEventListener('keydown', function(e) {
  console.log(e);
  if (e.key === 'ArrowLeft')
  prevSlide();
  if (e.key === 'ArrowRight')
  nextSlide();
})


const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
  currSlide=Number(slide);
};

dotContainer.addEventListener('click', function(e) {
  if (e.target.classList.contains('dots__dot')){
    // dataset/slide to retrieve the value of data-slide=
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
})



// 0% 100% 200% 300%


//191.Event propagation in Practise
// rgb(255,255,255)
// const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;



// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   // console.log('LINK');
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   // Stop prpoagation
//   // e.stopPropagation();
// })



// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target,  e.currentTarget);
// })

// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target,  e.currentTarget);
// })

//192. Event delegation



//193.DOM Traversing

// //Select child
// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// //Select Parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// })