let translations = {};

// Load and apply a language
function loadLanguage(lang) {
  fetch(`/JS/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      translations = data;

      // Translate static page content
      translatePage();

      // Optional dynamic sections
      refreshModalLanguage?.();
      refreshAboutSection?.();

      // Set language and direction
      document.documentElement.lang = (lang === 'Arabic') ? 'ar' : (lang === 'French') ? 'fr' : 'en';
      document.documentElement.dir = (lang === 'Arabic') ? 'rtl' : 'ltr';

      // Fix direction for modal detail container
      const detailsContainer = document.getElementById('detailsContainer');
      if (detailsContainer) {
        detailsContainer.style.textAlign = (lang === 'Arabic') ? 'right' : 'left';
        detailsContainer.style.direction = (lang === 'Arabic') ? 'rtl' : 'ltr';
      }

      // Fix direction for About section text
      const sectionText = document.querySelector('.section-text');
      if (sectionText) {
        sectionText.style.textAlign = (lang === 'Arabic') ? 'right' : 'left';
        sectionText.style.direction = (lang === 'Arabic') ? 'rtl' : 'ltr';
      }

      // Update language flag button
      updateLanguageDropdownFlag(lang);

      // Save language
      localStorage.setItem('selectedLanguage', lang);
    })
    .catch(error => console.error('Error loading language file:', error));
}

// Translates elements with data-i18n
function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}

// Update the language flag + label in the dropdown button
function updateLanguageDropdownFlag(lang) {
  const button = document.getElementById('current-language-btn');
  if (!button) return;

  const flagMap = {
    Arabic: `<img src="/images/flags/Egypt-flag.png" width="20"> العربية`,
    French: `<img src="/images/flags/france-logo.png" width="20"> Français`,
    English: `<img src="/images/flags/uk-logo.png" width="20"> English`,
  };

  button.innerHTML = flagMap[lang] || flagMap.English;
}

// Load saved language on page load
window.addEventListener('load', () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'English';
  updateLanguageDropdownFlag(savedLang); // Ensure flag button is updated
  loadLanguage(savedLang);               // Load translations
});

// Language selection buttons
document.getElementById('english-btn')?.addEventListener('click', e => {
  e.preventDefault();
  loadLanguage('English');
});

document.getElementById('arabic-btn')?.addEventListener('click', e => {
  e.preventDefault();
  loadLanguage('Arabic');
});

document.getElementById('french-btn')?.addEventListener('click', e => {
  e.preventDefault();
  loadLanguage('French');
});
