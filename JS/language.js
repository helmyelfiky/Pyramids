
let translations = {};

// Main language load function
function loadLanguage(lang) {
  fetch(`/JS/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      translations = data;
      translatePage();
      refreshModalLanguage?.();
      refreshAboutSection?.();
      updateLanguageDropdownFlag(lang); // ← Ensure it's always called here

      // Update document direction
      if (lang === 'Arabic') {
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';

        const detailsContainer = document.getElementById('detailsContainer');
        if (detailsContainer) {
          detailsContainer.style.textAlign = 'right';
          detailsContainer.style.direction = 'rtl';
        }

      } else {
        document.documentElement.lang = (lang === 'French') ? 'fr' : 'en';
        document.documentElement.dir = 'ltr';

        const detailsContainer = document.getElementById('detailsContainer');
        if (detailsContainer) {
          detailsContainer.style.textAlign = 'left';
          detailsContainer.style.direction = 'ltr';
        }
      }

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

// Update flag + label inside main language button
function updateLanguageDropdownFlag(lang) {
  const button = document.getElementById('current-language-btn');
  if (!button) return;

  if (lang === 'Arabic') {
    button.innerHTML = `<img src="/images/flags/Egypt-flag.png" width="20"> العربية`;
  } else if (lang === 'French') {
    button.innerHTML = `<img src="/images/flags/france-logo.png" width="20"> Français`;
  } else {
    button.innerHTML = `<img src="/images/flags/uk-logo.png" width="20"> English`;
  }
}

// Load saved language on page load
window.addEventListener('load', () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'English';
  updateLanguageDropdownFlag(savedLang);  // ← Set button label
  loadLanguage(savedLang);                // ← Load translations
});

// Language button clicks
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
