// rock - 0
// papper - 1
// scissors - 2
var choices = document.getElementsByClassName('choice')
var clickedId = null;

function UserTurn(id) {
	var text = document.getElementById("text");
	if (id == "rock") {
		text.innerText = "You Choose Rock"
		return 0;
	}
	else if (id == "paper") {
		text.innerText = "You Choose Paper"
		return 1;
	}else {
		text.innerText = "You Choose Scissors"
		return 2;
	}
}

function BotTurn() {
	var text = document.getElementById("text");
	let rand= (x,y)=> x+(y-x+1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0
	return rand(0,2)
}

Array.from(choices).forEach((elem) => {
	elem.addEventListener("click", (event) => {
		var user = UserTurn(event.target.id)
		console.log("user: " + user)
		var bot = BotTurn()
		var text = document.getElementById("text");
		if (bot == 0) {
			text.innerHTML= text.innerHTML + "<br>Bot Choose Rock"
		}
		else if(bot == 1) {
			text.innerHTML= text.innerHTML + "<br>Bot Choose Paper"
		}else {
			text.innerHTML= text.innerHTML + "<br>Bot Choose Scissors"
		}
		console.log("bot: " + bot)
		if (logic(user,bot) == 0) {
			var userStat = parseInt(document.getElementById("userStat").innerText)
			document.getElementById("userStat").innerText = parseInt(document.getElementById("userStat").innerText) + 1
			document.getElementById("msg").innerText = "User Winner"
		}
		else if (logic(user, bot) == 1) {
			var userStat = parseInt(document.getElementById("botStat").innerText)
			document.getElementById("botStat").innerText = parseInt(document.getElementById("botStat").innerText) + 1
			document.getElementById("msg").innerText = "Computer Winner"
		}else {
			document.getElementById("msg").innerText = "Draw"
		}
	})
});

function logic(user, bot) {
	// 0 = user
	// 1 = bot
	// 2 = draw
	if (user == bot) {
		return 2
	}
	if (user == 0 && bot == 2) {
		return 0
	}
	if (user == 2	 && bot == 0) {
		return 1
	}
	if (user > bot) {
		return 0
	}
	if (user < bot) {
		return 1
	}
}