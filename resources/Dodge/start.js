function Start() {
	this.startButton = new Image();
	this.word1 = chance.word({syllables : 3});
	this.button;
}
Start.prototype.init = function() {
	this.startButton.src = "play.png";
	this.button = new Button(175,145,50,50, this.startButton);
}
Start.prototype.loop = function() {
	if(this.button.clicked() == true) screenNumber = 1;
	document.getElementById("score").innerHTML = "";
}
Start.prototype.draw = function(ctx) {
	ctx.fillStyle = chance.color();
	ctx.font = "bolder 30px Syncopate";
	var metrics = ctx.measureText(this.word1);
	ctx.fillText(this.word1, 200 - metrics.width/2, 120);
	this.button.drawMe(ctx);
}