document.addEventListener("DOMContentLoaded", function () {

    let countdownElement = document.getElementById("countdown");
    let fireworksContainer = document.getElementById("fireworks");
    let stickersContainer = document.getElementById("stickers");
    let birthdayMessage = document.getElementById("birthday-message");
    let birthdaySong = document.getElementById("birthday-song");

    let countdown = 5;

    function startCountdown() {
        let interval = setInterval(() => {
            countdownElement.textContent = countdown;
            countdown--;

            if (countdown < 0) {
                clearInterval(interval);
                countdownElement.style.opacity = "0";

                showFireworks();
                showStickers();
                showBirthdayMessage();
                askForAudio();
            }
        }, 1000);
    }

    function showFireworks() {
        fireworksContainer.style.display = "block";

        for (let i = 0; i < 40; i++) {
            let f = document.createElement("div");
            f.classList.add("firework");
            f.style.left = Math.random() * 100 + "vw";
            f.style.top = Math.random() * 100 + "vh";
            f.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
            fireworksContainer.appendChild(f);
        }
    }

    function showStickers() {
        const emojis = ["🎂","🥤","🍟","🍫","🍰","😄","🤍","✨","🥳","🎉","🎈","💖"];

        for (let i = 0; i < 25; i++) {
            let e = document.createElement("div");
            e.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            e.style.position = "absolute";
            e.style.fontSize = (Math.random() * 30 + 30) + "px";
            e.style.left = Math.random() * 100 + "vw";
            e.style.animation = `float ${Math.random() * 4 + 3}s linear infinite`;
            stickersContainer.appendChild(e);
        }
    }

    function showBirthdayMessage() {
        setTimeout(() => {
            birthdayMessage.style.display = "block";
        }, 500);
    }

    function askForAudio() {
        let btn = document.createElement("button");
        btn.textContent = "Play Birthday Song 🎵";
        btn.style.position = "fixed";
        btn.style.top = "50%";
        btn.style.left = "50%";
        btn.style.transform = "translate(-50%, -50%)";
        btn.style.padding = "15px 30px";
        btn.style.fontSize = "20px";
        btn.style.background = "#333";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "10px";
        btn.style.cursor = "pointer";

        document.body.appendChild(btn);

        btn.addEventListener("click", () => {
            birthdaySong.play();
            btn.remove();
        });
    }

    startCountdown();
});
