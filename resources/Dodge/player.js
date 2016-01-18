function Player(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.drawMe = function (ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    this.loop = function () {
        if (Keyboard.dp && this.x < 341) this.x += 5;
        if (Keyboard.ap && this.x > 0) this.x -= 5;
    }
    this.collide = function (bad) {
        var midX = this.x + this.w / 2;
        var midY = this.y + this.h / 2;
        var bMidX = bad.x + bad.w / 2;
        var bMidY = bad.y + bad.h / 2;
        var xDist = Math.abs(midX - bMidX);
        var yDist = Math.abs(midY - bMidY);
        if ((this.w / 2 + bad.w / 2 > xDist) && (this.h / 2 + bad.h / 2 > yDist)) return true;
        else return false;
    }
}