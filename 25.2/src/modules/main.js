const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const mouse = {
  x: undefined,
  y: undefined
};

addEventListener("mousemove", event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

class Circle {
  constructor(x, y, radius, color) {
    this.y = y;
    this.x = x;
    this.color = color;
    this.radius = radius;
    this.velocity = {
      x: Math.random() - 0.2,
      y: Math.random() - 0.2
    };
  };

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); //Круг
    ctx.fill();
    ctx.closePath();
  };
};

const update = function() {
  this.draw();
  this.x += this.velocity.x;
  this.y += this.velocity.x;
};

let circles = [];
const init = () => {
  for (let i = 0; i < 800; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 5;
    const color = "LightSlateGray";
    circles.push(new Circle(x, y, radius, color));
  }
};

const animate = function() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach(element => {
    update.call(element);
  });
};

init();
animate();
