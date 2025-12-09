// const themeToggle = document.getElementById('themeToggle');
// const body = document.body;

// const currentTheme = localStorage.getItem('theme') || 'light';
// body.classList.toggle('dark-mode', currentTheme === 'dark');

// themeToggle.addEventListener('click', function() {
//     body.classList.toggle('dark-mode');
    
//     const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
//     localStorage.setItem('theme', theme);
// });

let Btn = document.getElementById("themeToggle");

Btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.addEventListener("darkMode", "enabled");
    } else {
        localStorage.addEventListener("darkMode", "disabled");
    }
});