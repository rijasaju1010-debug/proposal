// ===============================
// Typing Effect
// ===============================

const message =
  "From the moment I met you, my life became brighter. ❤️ Every smile of yours makes my heart skip a beat. Today I have only one question...";

let index = 0;
const typing = document.getElementById("typing");

function typeText() {
    if (index < message.length) {
        typing.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeText, 45);
    }
}

typeText();


// ===============================
// Floating Hearts
// ===============================

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = ["❤️", "💖", "💕", "💗", "💓", "💘"][Math.floor(Math.random() * 6)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = Math.random() * 25 + 20 + "px";

    heart.style.animationDuration = Math.random() * 4 + 5 + "s";

    heart.style.opacity = Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 300);


// ===============================
// Toast Message
// ===============================

const toast = document.getElementById("toast");

function showToast(text) {

    toast.innerHTML = text;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}


// ===============================
// Funny NO Messages
// ===============================

const messages = [

    "Are you sure? 🥺",

    "Think again ❤️",

    "I'll wait forever... 💖",

    "Please don't break my heart 😭",

    "You're too cute to say No 😍",

    "Loading... Changing your answer to YES 😆",

    "System Error: NO button disabled 😂",

    "Nice try 😜",

    "Mission Failed! Press YES 💍",

    "Come on... Say YES ❤️"

];


// ===============================
// Buttons
// ===============================

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

let yesScale = 1;


// ===============================
// NO Button Escapes
// ===============================

function moveButton() {

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    showToast(messages[Math.floor(Math.random() * messages.length)]);

    yesScale += 0.08;

    yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("click", moveButton);


// ===============================
// YES Button
// ===============================

yesBtn.addEventListener("click", () => {

    document.getElementById("success").style.display = "flex";

    // Hearts Explosion
    for (let i = 0; i < 120; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 20);
    }

    // Confetti using emojis
    createConfetti();

});


// ===============================
// Emoji Confetti
// ===============================

function createConfetti() {

    const emojis = ["❤️", "💖", "💕", "💗", "💘", "✨", "🌸"];

    for (let i = 0; i < 80; i++) {

        const item = document.createElement("div");

        item.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-50px";

        item.style.fontSize = Math.random() * 20 + 18 + "px";

        item.style.pointerEvents = "none";

        item.style.zIndex = "99999";

        const duration = Math.random() * 3 + 3;

        item.animate(
            [
                {
                    transform: `translateY(0) rotate(0deg)`
                },
                {
                    transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, duration * 1000);
    }
}


// ===============================
// Sparkle Around Cursor
// ===============================

document.addEventListener("mousemove", (e) => {

    if (Math.random() > 0.85) {

        const sparkle = document.createElement("div");

        sparkle.innerHTML = "✨";

        sparkle.style.position = "fixed";
        sparkle.style.left = e.clientX + "px";
        sparkle.style.top = e.clientY + "px";

        sparkle.style.pointerEvents = "none";
        sparkle.style.fontSize = "18px";
        sparkle.style.zIndex = "9999";

        sparkle.animate(
            [
                {
                    opacity: 1,
                    transform: "translateY(0) scale(1)"
                },
                {
                    opacity: 0,
                    transform: "translateY(-40px) scale(2)"
                }
            ],
            {
                duration: 800,
                easing: "ease-out"
            }
        );

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 800);
    }

});


// ===============================
// Background Music (Optional)
// Uncomment if you add music.mp3
// ===============================

/*
const music = new Audio("music.mp3");
music.loop = true;

document.body.addEventListener("click", () => {
    music.play();
}, { once: true });
*/


// ===============================
// Keep NO button inside screen
// ===============================

window.addEventListener("resize", () => {
    noBtn.style.left = "";
    noBtn.style.top = "";
    noBtn.style.position = "relative";
});