var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//0 = title 1 = playing 2 = death
var screenNumber = 0;
var score = 0;
var game = new Game();
var start = new Start();
var over = new Over();
var bg = new Image();
function init() {
    game.init();
    start.init();
    over.init();
    bg.src = "background.jpg";
}

function loop() {
    if (screenNumber == 0) {
        start.loop();
    } 
    else if (screenNumber == 1) {
        //game
        game.loop();
    }
    else if  (screenNumber == 2) {
        over.loop();
    }
}

function draw() {
    ctx.drawImage(bg,0,0,400,320);
    if (screenNumber == 0) {
        //title
        start.draw(ctx);
    } else if (screenNumber == 1) {
        //game
        game.draw();
    } else if (screenNumber == 2) {
        //death message
        over.draw(ctx);
    }
}
init();
setInterval(function () {
    loop();
    draw();
}, 17);
setInterval(function () {
    if(screenNumber == 1) {
    score += 1;
}
}, 1000);