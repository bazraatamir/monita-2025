// Convert ransom text to spans
const container = document.getElementById("ransomText");
const text = container.innerText.trim();
container.innerHTML = "";

text.split("").forEach(char => {
    const span = document.createElement("span");
    span.innerText = char === " " ? "\u00A0" : char;
    container.appendChild(span);
});

// GSAP animation: letters come from left/right, lower half → upper half
gsap.set("span", { y: 80, rotateX: 70, opacity: 0 });

gsap.to("span", {
    y: 0,
    rotateX: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.05,
    ease: "back.out(2)",
});
