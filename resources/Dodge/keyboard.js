var Keyboard = {
	ap: false,
	dp: false
}
function onKeyDown(e) {
   	if (e.keyCode == 68) {
        Keyboard.dp = true;
    }
    if (e.keyCode == 65) {
        Keyboard.ap = true;
    }
}

function onKeyUp(e) {
    if (e.keyCode == 68) {
        Keyboard.dp = false;
    }
    if (e.keyCode == 65) {
        Keyboard.ap = false;
    }
}
addEventListener("keydown", onKeyDown, false);
addEventListener("keyup", onKeyUp, false);