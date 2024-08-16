////////////////////////////////          Navbar  Toggle part /////////////////////////

let navbarToggle = document.querySelector('.navbar-toggler');
navbarToggle.addEventListener("click", () => {
  document.querySelector('.collapse-content').classList.toggle('active')
})

let closeNav = document.querySelector('.close_nav');
closeNav.addEventListener("click", () => {
  document.querySelector('.collapse-content').classList.remove('active')
})


//// ////////////////////////////////////////    Swiper part     ///////////////////////////////////////////

// Swiper slider 

$( document ).ready(function() {
  var swiper = new Swiper(".testimonial .swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".right-arrow",
      prevEl: ".left-arrow",
    },
    breakpoints: {
      1100: {
        slidesPerGroup: 3,
        slidesPerView: 2.5,
      },
      992: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
     768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      360: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
    },
  });
   
});

// Swiper arrow 

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".right-arrow",
    prevEl: ".left-arrow",
  },
  loop:true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});  


// //////////////////////////////////////////////// Navbar Transparent  ////////////////////////////////////////////////////////////

(function() {
  "use strict";

  /**
   * Easy selector helper function [BY DEFAULT]
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

   /**
    * Easy event listener function [BY DEFAULT]
    */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

   /**
    * Easy on scroll event listener  [BY DEFAULT]
    */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

   /**
    * Navbar links active state on scroll
    */
  let navbarlinks = select('#navbar  .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

   /**
   * Scrolls to an element with header offset [SMOOTH SCROLLING]
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
  * Toggle .header-scrolled class to #header when page is scrolled [NAV BAR APPEAR]
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }


    /**
    * Scrool with ofset on links with a class name .scrollto [BY CLICKING]
    */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)


})()



/////////////////////////////////////////////////// For Accordion ///////////////////////////////////////////////////

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
