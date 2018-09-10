

document.addEventListener("DOMContentLoaded",  function(){
	let game = new Game();
	document.body.append(game.createCards());
	let cardContainer = document.getElementsByTagName("ul")[0];
	cardContainer.addEventListener("click", function(e){
		let targetElement = e.target;
		
		if(targetElement.tagName === "LI"){
			game.checkForPossibleFlip(targetElement);
		}
	})
})