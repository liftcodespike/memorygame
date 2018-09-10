
function shake(targetElement){
	console.log('ji')
	setTimeout(function(){targetElement.setAttribute('style', 'transform: rotate(15deg);')},99);
	setTimeout(function(){targetElement.setAttribute('style', 'transform: rotate(-30deg);')},124);
	setTimeout(function(){targetElement.setAttribute('style', 'transform: rotate(0deg);')},150);

}

document.addEventListener("DOMContentLoaded",  function(){
	let game = new Game();
	document.body.append(game.createCards());

	let cardContainer = document.getElementsByTagName("ul")[0];
	cardContainer.addEventListener("click", function(e){
		let targetElement = e.target;
		console.log(targetElement.getAttribute('card-type'))
		shake(targetElement);

	})

})