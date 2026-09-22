/* =================================
   PAGE SYSTEM
================================= */

const pages = document.querySelectorAll(".page");

function nextPage(pageNumber) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document
        .getElementById("page" + pageNumber)
        .classList.add("active");
}


/* =================================
   ENVELOPE
================================= */

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        nextPage(2);

    }, 900);

});


/* =================================
   YES BUTTON
================================= */

const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document
        .getElementById("finalPage")
        .classList.add("active");

    heartExplosion();

});


/* =================================
   NO BUTTON
================================= */

const noBtn = document.getElementById("noBtn");


function moveNoButton() {

    const padding = 15;

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX =
        window.innerWidth -
        buttonWidth -
        padding;

    const maxY =
        window.innerHeight -
        buttonHeight -
        padding;


    const randomX =
        padding +
        Math.random() * Math.max(maxX - padding, 1);

    const randomY =
        padding +
        Math.random() * Math.max(maxY - padding, 1);


    noBtn.style.position = "fixed";

    noBtn.style.left = randomX + "px";

    noBtn.style.top = randomY + "px";

}


/* Computer */

noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


/* Mobile */

noBtn.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);


/* =================================
   FLOATING HEARTS
================================= */

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    const symbols = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💘",
        "💓"
    ];

    heart.innerText =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    document
        .getElementById("hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(
    createFloatingHeart,
    600
);


/* =================================
   YES - HEART EXPLOSION
================================= */

function heartExplosion() {

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💘"
    ];


    for (let i = 0; i < 45; i++) {

        const heart =
            document.createElement("div");

        heart.innerText =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.position = "fixed";

        heart.style.left = "50%";

        heart.style.top = "50%";

        heart.style.fontSize =
            (18 + Math.random() * 25) + "px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex = "999";


        document.body.appendChild(heart);


        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            100 +
            Math.random() * 350;


        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;


        heart.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.5)`,

                    opacity: 0
                }
            ],

            {
                duration:
                    1000 +
                    Math.random() * 800,

                easing: "cubic-bezier(.17,.67,.83,.67)"
            }

        );


        setTimeout(() => {

            heart.remove();

        }, 2000);

    }

}