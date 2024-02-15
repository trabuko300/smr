
//Animaciones

document.addEventListener("DOMContentLoaded", function () {
    var heading = document.getElementById("animated-heading");

    setTimeout(function () {
        heading.style.opacity = "1";
        heading.style.transform = "translateY(0)";
    }, 500); // Delay the animation for 500 milliseconds

});

document.addEventListener("DOMContentLoaded", function () {
    var heading = document.getElementById("animated-heading2");

    setTimeout(function () {
        heading.style.opacity = "1";
        heading.style.transform = "translateY(0)";
    }, 800); // Delay the animation for 500 milliseconds

});

document.addEventListener("DOMContentLoaded", function () {
    var heading = document.getElementById("animated-button");

    setTimeout(function () {
        heading.style.opacity = "1";
        heading.style.transform = "translateY(0)";
    }, 500); // Delay the animation for 500 milliseconds

});

//Boton login-signup

document.addEventListener("DOMContentLoaded", function () {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var toggleButton = document.getElementById("button-login"); // Cambiado aquí

    toggleButton.addEventListener("click", function () {
        if (div1.classList.contains("mostrar")) {
            div1.classList.remove("mostrar");
            div1.classList.add("oculto");
            div2.classList.remove("oculto");
            div2.classList.add("mostrar");
        } else {
            div2.classList.remove("mostrar");
            div2.classList.add("oculto");
            div1.classList.remove("oculto");
            div1.classList.add("mostrar");
        }
    });
});

/*H1 ANIMADO y particles*/

document.addEventListener("DOMContentLoaded", function() {
    var miDiv = document.querySelector(".miDiv");
    miDiv.classList.add("animate");
});
