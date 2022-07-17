const changeThemeBtn = document.querySelector("#change-theme")


function toggleToDarkMode(){
    document.body.classList.toggle("dark");
}

function loadTheme(){
    const darkMode = localStorage.getItem("dark");

    if (darkMode){
        toggleToDarkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function(){
    toggleToDarkMode();

    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }
});