
let translations = {};

function loadLanguage(lang) {
  fetch(`/JS/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      translations = data;
      translatePage();
      refreshModalLanguage(); // Update modal text
      refreshAboutSection(); // Update about section text
      
      if (lang === 'Arabic') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.lang = 'ar';

        // Only change the text part (NOT the image)
        const detailsContainer = document.getElementById('detailsContainer');
        if (detailsContainer) {
          detailsContainer.style.textAlign = 'right';
          detailsContainer.style.direction = 'rtl';
        }

      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.lang = 'en';

        const detailsContainer = document.getElementById('detailsContainer');
        if (detailsContainer) {
          detailsContainer.style.textAlign = 'left';
          detailsContainer.style.direction = 'ltr';
        }
      }

      // Save selected language
      localStorage.setItem('selectedLanguage', lang);
    })
    .catch(error => console.error('Error loading language file:', error));
}



function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[key]) {
      element.innerHTML = translations[key];
    }
  });
}



// When page loads
window.addEventListener('load', () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'English';
  loadLanguage(savedLang);
});

// Buttons
document.getElementById('arabic-btn').addEventListener('click', () => loadLanguage('Arabic'));
document.getElementById('english-btn').addEventListener('click', () => loadLanguage('English'));



// <!-- LANGUAGE SWITCHER -->
document.addEventListener("DOMContentLoaded", function () {
  const languageSwitcher = document.getElementById("languageSwitcher");

  // Function to load and apply language
  function loadLanguage(lang) {
      fetch(`/JS/${lang}.json`) // Load the selected language JSON
          .then(response => response.json())
          .then(translations => {
              document.querySelectorAll("[data-i18n]").forEach(el => {
                  const key = el.getAttribute("data-i18n");
                  if (translations[key]) {
                      el.textContent = translations[key]; // Update text
                  }
              });

              // If Arabic, switch page direction to RTL
              document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
          })
          .catch(error => console.error("Error loading language:", error));
  }

  // Detect language change
  languageSwitcher.addEventListener("change", function () {
      localStorage.setItem("selectedLang", this.value); // Save selection
      loadLanguage(this.value);
  });

  // Load saved language on page load
  const savedLang = localStorage.getItem("selectedLang") || "en";
  languageSwitcher.value = savedLang;
  loadLanguage(savedLang);
});
