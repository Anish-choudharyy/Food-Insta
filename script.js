let Btn = document.getElementById("themeToggle");

Btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.addEventListener("darkMode", "enabled");
    } else {
        localStorage.addEventListener("darkMode", "disabled");
    }
});
