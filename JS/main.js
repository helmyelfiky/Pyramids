console.log("JS file is connected to HTML! Woo!");
// FILTER BUTTONS - OUR PRODUCTS SECTION JS - NOT USED
// document.querySelectorAll('.filter-button').forEach(button => {
//     button.addEventListener('click', () => {
//       document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
//       button.classList.add('active');
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const filterButtons = document.querySelectorAll('.filter-btn');
//     const productItems = document.querySelectorAll('.product-item');

//     filterButtons.forEach(button => {
//       button.addEventListener('click', function () {
//         // Remove active class from all buttons
//         filterButtons.forEach(btn => btn.classList.remove('active'));

//         // Add active class to clicked button
//         this.classList.add('active');

//         const filterValue = this.getAttribute('data-filter');

//         productItems.forEach(item => {
//           if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
//             item.classList.remove('hidden');
//           } else {
//             item.classList.add('hidden');
//           }
//         });
//       });
//     });
// });

// -----------------------SLIDER JS - HERO SECTION - NOT USED-----------------------
// const slides = document.querySelectorAll('.slide');
// const dots = document.querySelectorAll('.dot');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// let currentSlide = 0;

// function showSlide(index) {
//     slides.forEach(slide => slide.classList.remove('active'));
//     dots.forEach(dot => dot.classList.remove('active'));

//     slides[index].classList.add('active');
//     dots[index].classList.add('active');
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(currentSlide);
// }

// // Event listeners
// prevBtn.addEventListener('click', prevSlide);
// nextBtn.addEventListener('click', nextSlide);

// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//       currentSlide = index;
//       showSlide(currentSlide);
//     });
// });

// // Auto-advance slides every 5 seconds
// setInterval(nextSlide, 5000);

// -----------------------------END OF SLIDER JS--------------------------------

// -----------------------------DOM CONTENT LOADED--------------------------------
// LANGUAGE SWITCHER
// document.addEventListener("DOMContentLoaded", function () {
//     // LANGUAGE SWITCHER JS IN TEXTFILE
//     // -----------------------END OF LANGUAGE SWITCHER JS-----------------------
//     // -----------------------LOADER JS-----------------------------------------
//     // Show loader initially
//     document.getElementById("loader").style.display = "flex";

//     // Wait until everything loads
//     window.onload = function () {
//         setTimeout(function () {
//           document.getElementById("loader").style.display = "none";
    
//           // Fade in the main content
//           let content = document.getElementById("main-content");
//           content.style.opacity = "1";
//           content.style.visibility = "visible";
//         }, 1000); // Delay before revealing content
//     };
// });