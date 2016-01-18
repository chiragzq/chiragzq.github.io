var mousedown;
var lastx = -1;
var lasty = -1;
var colors = ["blue","red","green","orange","yellow","purple","white","black"];
function checkdown(e) {
    var xs =  document.getElementById("xsize").value;
    var c = document.getElementById("color").value;
    lastx = e.clientX;
    lasty = e.clientY;
    mousedown = true;
    ctx.beginPath();
    ctx.strokeStyle = c;
    ctx.lineWidth = xs;
}

function checkup() {
    ctx.stroke();
    mousedown = false;
    lastx = -1;
    lasty = -1;
}

function cclick(e) {
    document.getElementById("color").value = e.target.style.backgroundColor;
}

function mousemove(e) {
    if (mousedown) {
        var x = e.clientX - 15;
        var y = e.clientY - 15;
        var xs =  document.getElementById("xsize").value;
        var ys = document.getElementById("ysize").value;
        ctx.lineTo(x,y);
    }
}
var c = document.getElementById("demo");
var ctx = c.getContext("2d");
c.addEventListener('mousemove', mousemove, false);
c.addEventListener('mouseup', checkup, false);
c.addEventListener('mousedown', checkdown, false);
for(var i = 0;i < 8;i ++) {
    document.getElementById(colors[i]).addEventListener('click', cclick, false);
}
