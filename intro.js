
var IntroText = "Polska - 13.03.2017\nKomandos Jakub\nCel misji: Unicestwienie jak największej ilości przeciwników w jak najkrótszym czasie\nPowodzenia!                             ";
var CurrentCharacter = 0;
var TextLines = [ "" ];
var Step = 0;
var TypeTimer = 0.0;

function tickAndDrawIntro(context, delta)
{
	if (isKeyPressed(13)) { // space = skip
		state = STATE_INGAME;
		return;
	}

	TypeTimer -= delta;
	if (TypeTimer < 0.0) {
		if (CurrentCharacter == IntroText.length) {
			state = STATE_INGAME;
		}

		if (IntroText[CurrentCharacter] == '\n') {
			TextLines.push("");
		}
		else {
			TextLines[TextLines.length - 1] += IntroText[CurrentCharacter];
		}
		CurrentCharacter++;

		TypeTimer = 0.07;
	}

	for (var i = 0; i < TextLines.length; ++i) {
		context.font = "15px Comic Sans MS";
		context.fillStyle = "#00FF00";
		context.textAlign = "left";
		context.fillText(TextLines[i], 10, (w/2) - 200 + (i * 25)); 
	}

	context.fillStyle = "#A9A9A9";
	context.fillText("ENTER - pomiń", 10, h - 100); 
}