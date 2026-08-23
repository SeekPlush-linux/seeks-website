(function () {
    const nameEl = document.getElementById("typed-name");
    const bioEl = document.getElementById("typed-bio");
    const loader = document.getElementById("loader");

    nameEl.textContent = "";
    bioEl.textContent = "";

    const typeText = (element, text, speed, callback) => {
        let i = 0;
        const type = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        };
        type();
    };

    window.onload = () => {
        setTimeout(() => {
            loader.classList.add("hidden");
            setTimeout(() => {
                typeText(nameEl, "Seek Plush", 120, () => {
                    setTimeout(() => {
                        typeText(bioEl, "meow :3", 80);
                    }, 300);
                });
            }, 200);
        }, 600);
    };
})();

const cursor = document.getElementById("cursor");
const cursorDot = document.getElementById("cursor-dot");
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX - 2 + "px";
    cursorDot.style.top = mouseY - 2 + "px";
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX - 10 + "px";
    cursor.style.top = cursorY - 10 + "px";
    requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('[data-cursor="hover"], button, a').forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});

async function copyDiscord() {
    const text = "7256";
    try {
        await navigator.clipboard.writeText(text);
        showToast();
    } catch (err) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showToast();
    }
}

function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}
