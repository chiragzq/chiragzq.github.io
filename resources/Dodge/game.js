function Game() {
    var chance1 = 65;
    var imgs = [];
    var player;
    var bads = [];
    var bullets = [];
    function addBad() {
        bads = bads.concat(new Bad(Math.floor(Math.random() * 350) + 1, -37, 50, 37, imgs[Math.floor(Math.random() * 3)]));
    }

    this.init = function() {
        var urls = ["Bananas.svg", "taco.svg", "potato.svg"]
        var img = new Image();
        img.src = "pico.svg";
        var img2 = new Image();
        player = new Player(1, 250, 60, 70, img);
        for (var i = 0; i < urls.length; i++) {
            var temp = new Image();
            temp.src = urls[i];
            imgs = imgs.concat(temp);
        }
    }

    this.loop = function() {
        player.loop();
        document.getElementById("score").innerHTML = "Score: " + score;
        if (Math.floor(Math.random() * chance1) + 1 === 1) addBad();
        if (bads.length > 0) if (bads[0].y > 321) bads.splice(0, 1);
        for (var i = 0; i < bads.length; i++) {
            bads[i].loop();
            if (player.collide(bads[i])) {
                screenNumber = 2;
            }
        }
    }

    this.draw = function() {
        player.drawMe(ctx);
        for (var i = 0; i < bads.length; i++) {
            bads[i].drawMe(ctx);
        }
    }
    this.reset = function() {
        bads.length = 0;
        chance1 = 65
        speed = 2;
    }
    setInterval(function() {
	if(chance1 > 11) chance -= 1;
},7250)
}