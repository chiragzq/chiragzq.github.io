function Over() {
	var endButton = new Image();
	endButton.src = "restart.png";
	var button;
	this.init = function() {
		button = new Button(175,145,50,50, endButton);
}
this.loop = function() {
	if(button.clicked() == true) {
		game.reset();
		screenNumber = 0;
		score = 0;
	}
}
this.draw = function(ctx) {
	ctx.fillStyle = "red";
	ctx.font = "bolder 30px Syncopate";
	ctx.fillText("You lose!", 89.80712890625, 120);
	button.drawMe(ctx);
}
}