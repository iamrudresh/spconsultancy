document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('nav-open');
            hamburger.classList.toggle('toggled');
        });
    }

    // --- Theme Switcher ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const html = document.documentElement;

    // SVG icons for the switcher
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    // Function to set the theme based on the 'theme' parameter ('dark' or 'light')
    const setTheme = (theme) => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            html.classList.remove('light-mode');
            html.classList.add('dark-mode');
            themeSwitcher.innerHTML = sunIcon;
        } else {
            html.classList.remove('dark-mode');
            html.classList.add('light-mode');
            themeSwitcher.innerHTML = moonIcon;
        }
    };

    // --- Initial Theme Load ---
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        // If there's a theme saved in localStorage, use it
        setTheme(savedTheme);
    } else if (prefersDark) {
        // If no theme is saved, check the OS preference
        setTheme('dark');
    } else {
        // Otherwise, default to light
        setTheme('light');
    }

    // --- Event Listener for the Switcher Button ---
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            const currentIsDark = html.classList.contains('dark-mode');
            setTheme(currentIsDark ? 'light' : 'dark');
        });
    }
});