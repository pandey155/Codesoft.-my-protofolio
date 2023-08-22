

  // Smooth scrolling to section when clicking on navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Toggle mobile menu
  const mobileMenuButton = document.querySelector('#mobile-menu-button');
  const mobileMenu = document.querySelector('#mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });

  // Show/hide contact form
  const contactButton = document.querySelector('#contact-button');
  const contactForm = document.querySelector('#contact-form');

  contactButton.addEventListener('click', () => {
    contactForm.classList.toggle('show');
  });

  // Display current year in footer
  const currentYear = new Date().getFullYear();
  document.querySelector('#current-year').textContent = currentYear;
  // JavaScript for Toggle Menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
function changeLanguage(language) {
  var element = document.getElementById("url");
  element.value = language;
  element.innerHTML = language;
}

function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}
function handleScroll() {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    const projectTop = project.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (projectTop < windowHeight * 0.8) {
      project.classList.add('fade-in');
    }
  });
}

window.addEventListener('scroll', handleScroll);
// Trigger the handleScroll function on page load
handleScroll();

