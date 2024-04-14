const speed = 1;

class Particle {
  constructor(eft) {
    this.effect = eft;
    this.r = Math.random() * 15 + 5;
    this.x = this.r + Math.random() * (this.effect.width - this.r * 2);
    this.y = this.r + Math.random() * (this.effect.height - this.r * 2);
    this.vx = (Math.random() - 0.5) * speed;
    this.vy = (Math.random() - 0.5) * speed;
    this.canvas = this.effect.canvas;
  }

  draw(c) {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fill();
  }
  update() {
    if (this.effect.pointer.clicked) {
      let dx = this.effect.pointer.x - this.x;
      let dy = this.effect.pointer.y - this.y;
      let dist = Math.hypot(dy, dx);
      if (dist < this.effect.pointer.radious) {
        let angle = Math.atan2(dy, dx);
        this.x -= Math.cos(angle) * 2;
        this.y -= Math.sin(angle) * 2;
      }
    }

    this.x += this.vx;
    this.y += this.vy;
    /*
            if(this.x + this.r > canvas.width || this.x < this.r + 0){
                this.vx *= -1;
            }
            if(this.y + this.r > canvas.height || this.y < this.r + 0){
                this.vy *= -1;
            }
            */

    if (this.x < this.r) {
      this.x = this.r;
      this.vx *= -1;
    } else if (this.x > this.canvas.width - this.r) {
      this.x = this.canvas.width - this.r;
      this.vx *= -1;
    }

    if (this.y < this.r) {
      this.y = this.r;
      this.vy *= -1;
    } else if (this.y > this.canvas.height - this.r) {
      this.y = this.canvas.height - this.r;
      this.vy *= -1;
    }
  }
}

class Effect {
  constructor(canvas) {
    this.canvas = canvas;
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.particleHolder = [];
    this.particleCount = 505;
    this.createParticle();
    this.pointer = {
      x: 0,
      y: 0,
      radious: 150,
      clicked: false,
    };
  }

  createParticle() {
    for (let i = 0; i < this.particleCount; i++) {
      this.particleHolder.push(new Particle(this));
    }
  }

  handleParticle(value) {
    for (let i = 0; i < this.particleHolder.length; i++) {
      this.particleHolder[i].draw(value);
      this.particleHolder[i].update();
    }
  }
}

export default function startAnimation() {
  const canvas = document.getElementById("canvasAnimation");
  const ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  ctx.fillStyle = "#1e293b";
  ctx.strokeStyle = "#1e293b";

  let effect = new Effect(canvas);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.handleParticle(ctx);
    requestAnimationFrame(animate);
  }

  animate();

  function handleTouch(e) {
    effect.pointer.clicked = true;
    effect.pointer.x = e.touches[0].clientX;
    effect.pointer.y = e.touches[0].clientY;
  }

  function handleEnd(e) {
    effect.pointer.clicked = false;
    effect.pointer.x = undefined;
    effect.pointer.y = undefined;
  }

  window.addEventListener("touchstart", handleTouch);
  window.addEventListener("touchmove", handleTouch);
  window.addEventListener("touchend", handleEnd);
}
