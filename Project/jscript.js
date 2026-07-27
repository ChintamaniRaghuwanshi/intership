console.log("Javascript is connected")
const year= new Date().getFullYear();
document.querySelector('.site-footer p').innerHTML=
    `&copy;${year} Chintamani Raghuwanshi.All rights reserved.`;
function getGreeeting(){
    const hour= new Date().getHours();
    if(hour < 12) return "Good Morning";
    if (hour< 17) return "Good Afternoon";
    return "Good Evening";
}
const heroTitle =document.querySelector('.hero-section h1');
if (heroTitle){
    heroTitle.textContent = `${getGreeeting()}, I'm Chintamani Raghuwanshi 🤗`;
}
//Dark Mode
 
let themeBtn = document.querySelector(".theme-toggle");
 
function updateThemeIcon(theme) {
    themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
}
 
if (themeBtn) {
 
    let savedTheme = localStorage.getItem("theme") || "light";
 
    document.body.dataset.theme = savedTheme;
 
    updateThemeIcon(savedTheme);
 
    themeBtn.addEventListener("click", () => {
 
        let nextTheme =
            document.body.dataset.theme === "light"
                ? "dark"
                : "light";
 
        document.body.dataset.theme = nextTheme;
 
        localStorage.setItem("theme", nextTheme);
 
        updateThemeIcon(nextTheme);
 
    });
 
}
 