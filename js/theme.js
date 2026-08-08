const themeButton = document.querySelector(".theme-btn");

const body = document.body;

const icon = themeButton.querySelector("i");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    body.classList.add("light-theme");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}

themeButton.addEventListener("click",()=>{

    body.classList.toggle("light-theme");

    if(body.classList.contains("light-theme")){

        localStorage.setItem("theme","light");

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    }

    else{

        localStorage.setItem("theme","dark");

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});