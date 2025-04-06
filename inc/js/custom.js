// Hero Area
let c = document.getElementById("c");
let ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;

let matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
matrix = matrix.split("");

let font_size = 10;
let columns = c.width / font_size;
let drops = [];

for (let x = 0; x < columns; x++)
    drops[x] = 1;

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#4bf442";
    ctx.font = font_size + "px arial";

    for (let i = 0; i < drops.length; i++) {
        let text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}
setInterval(draw, 25);

// Get current year
(function () {
    let year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();
