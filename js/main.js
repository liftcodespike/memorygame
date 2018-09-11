//this file sets up game.
document.addEventListener("DOMContentLoaded",  function(){
	let game = new Game(document.getElementById('myModal'),new Timer());
	let lastThree = [];
	let setClick = function(e){
		let targetElement = e.target;
		if(targetElement.tagName === "LI"){
			game.checkForPossibleFlip(targetElement);
		}
	}
	document.body.append(game.createCards());
	let cardContainer = document.getElementsByTagName("ul")[0];
	let resetBtn = document.getElementById("resetBtn");
	cardContainer.addEventListener("click", setClick);
	var content = document.getElementsByClassName("modal-content")[0];
	content.onclick = function() {
    	game.modal.style.display = "none";
	}
	window.onclick = function(event) {
	    if (event.target == game.modal) {
	        game.modal.style.display = "none";
	    }
	}
})