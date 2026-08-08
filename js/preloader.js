const words = [
    "Hello 👋",
    "नमस्ते",
    "ନମସ୍କାର",
    "Welcome."
];

const preloader = document.getElementById("preloader");
const loaderText = document.querySelector(".loader-text");

// Already shown in this tab?
if (sessionStorage.getItem("preloaderShown")) {

    preloader.style.display = "none";

} else {

    sessionStorage.setItem("preloaderShown", "true");

    let index = 0;

    function showWord() {

        loaderText.classList.add("fade");

        setTimeout(() => {

            loaderText.textContent = words[index];

            loaderText.classList.remove("fade");

            index++;

            if (index < words.length) {

                setTimeout(showWord, 700);

            } else {

                setTimeout(() => {

                    preloader.classList.add("hide");

                }, 700);

            }

        }, 250);

    }

    window.addEventListener("load", showWord);

}