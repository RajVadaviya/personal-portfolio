document.addEventListener("DOMContentLoaded", function() {
    // --- Component Loading Function ---
    const loadComponent = (componentPath, containerId) => {
        fetch(componentPath)
            .then(response => response.text())
            .then(html => {
                document.getElementById(containerId).innerHTML = html;
            })
            .catch(error => console.error(`Error loading component from ${componentPath}:`, error));
    };

    // --- Load all the components for your portfolio ---
    loadComponent('components/header.html', 'header-container');
    loadComponent('components/hero.html', 'hero-container');
    loadComponent('components/projects.html', 'projects-container');
    loadComponent('components/skills.html', 'skills-container');
    loadComponent('components/footer.html', 'footer-container');


    // --- NEW: Auto-hide header on scroll logic ---
    let lastScrollTop = 0;
    const header = document.getElementById('header-container');

    window.addEventListener("scroll", function() {
        // Get the current scroll position
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // User is scrolling DOWN
            header.classList.add('header-hidden');
        } else {
            // User is scrolling UP
            header.classList.remove('header-hidden');
        }
        
        // Update the last scroll position
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    }, false);
});