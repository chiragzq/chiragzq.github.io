var speed = 2;
setInterval(function() {
        speed += 0.6;
    }, 3500);
function Bad(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.drawMe = function (ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    this.loop = function (ctx) {
        this.y += speed;
    }
}