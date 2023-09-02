const btn= document.getElementById('menu-btn');
const overlay=document.getElementById('overlay');
const menu=document.getElementById('side-bar');
const counters= document.querySelectorAll('.counter');
let scrollStarted= false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);


function navToggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-side-bar');
}
function scrollPage() {
    const scrollPos = window.scrollY;
  
    if (scrollPos > 100 && !scrollStarted) {
      countUp();
      scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
      reset();
      scrollStarted = false;
    }
  }
  
  function countUp() {
    counters.forEach((counter) => {
      counter.innerText = '0';
  
      const updateCounter = () => {
        // Get count target
        const target = +counter.getAttribute('data-target');
        // Get current counter value
        const c = +counter.innerText;
  
        // Create an increment
        const increment = target / 100;
  
        // If counter is less than target, add increment
        if (c < target) {
          // Round up and set counter value
          counter.innerText = `${Math.ceil(c + increment)}`;
  
          setTimeout(updateCounter, 8);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCounter();
    });
  }
  
  function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
  } 
  // header hide



  var prevScrollpos = window.scrollY;
  window.onscroll = function() {
  var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header-nav").style.top = "0";
    } else {
      document.getElementById("header-nav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

//   $(document).ready(function(){       
//     var scroll_pos = 0;
//     $(document).scroll(function() { 
//         scroll_pos = $(this).scrollTop();
//         if(scroll_pos > 650) {
//             $(".header").css('background-color', '#000');
//         } else {
//             $(".header").css('background-color', 'Transparent');
//         }
//     });
// });


// var prevScrollpos = window.scrollY;
// window.onscroll = function() {
// var currentScrollPos = window.scrollY;
// if (prevScrollpos > currentScrollPos) {
// document.getElementById('header-nav').style.top = "0";
// } else {
// document.getElementById('header-nav').style.top = "-95px";
// }
// prevScrollpos = currentScrollPos;
// }
