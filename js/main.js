document.addEventListener("DOMContentLoaded",  function(){
	let game = new Game();
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
})