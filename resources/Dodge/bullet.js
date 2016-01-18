function Bullet(x, y) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.drawMe = function (ctx) {
        ctx.fillRect(this.x,this.y,5,10);
    }
    this.loop = function (ctx) {
        this.y -= 10;
    }
}