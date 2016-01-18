var mousedown = false;
var mouseX = 0;
var mouseY = 0;
function Button(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
    this.drawMe = function (ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    this.clicked = function (e) {
        var xDist = Math.abs((this.x + this.w / 2) - mouseX);
        var yDist = Math.abs((this.y + this.h / 2) - mouseY);
        if(xDist < this.w / 2) if(yDist < this.h / 2) {
            mouseX = 0;
            mouseY = 0;
            return true;
        }
        else return false;
    }
}
addEventListener('mousedown', function(e) {
    mouseX = e.clientX - 8;
    mouseY = e.clientY - 8;
}, false);