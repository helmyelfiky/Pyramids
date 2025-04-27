let translations = {};

function loadLanguage(lang) {
  fetch(`/JS/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      translations = data;
      translatePage();
      refreshModalLanguage(); // ADD THIS!

      // Change direction
      if (lang === 'Arabic') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.lang = 'ar';
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.lang = 'en';
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
