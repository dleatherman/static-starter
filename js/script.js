const toggleBtn = document.querySelector('#toggleMode');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const currentTheme = localStorage.getItem('theme');

if (prefersDarkScheme && currentTheme === 'dark') {
   document.body.classList.add('dark-theme');
   localStorage.setItem('theme', 'dark');
} else {
   document.body.classList.remove('dark-theme');
   localStorage.setItem('theme', 'light');
}

if (toggleBtn) {
   toggleBtn.classList = `toggle__btn ${currentTheme}`;
   toggleBtn.addEventListener('click', (e) => {
      const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
      document.body.classList.toggle('dark-theme');
      localStorage.setItem('theme', newTheme);
      toggleBtn.classList = `toggle__btn ${newTheme}`;
   });
}
