//game class that handles logic
class Game{
	constructor(){

	}
	//returns a list of shuffled items.
	getShuffledItems(){
		var items = ["automobile","bell","bicycle", "bolt", "bomb","check", "futbol-o","gamepad"];
		for(let index = 0; index < items.length; index+=1){
			let randNum = Math.floor(Math.random() * items.length);
			let temp = items[index];
			items[index] = items[randNum];
			items[randNum] = temp;
		}
		return items;
	}
	// this function returns a randomized unordered list inside a document frag to add to page.
	createDocFrag(){
		let items1 = getShuffledItems()
		let fragment = document.createDocumentFragment();
		let ul = document.createElement('ul');
		for(let index = 0; index< this.items.length; index +=1){
			ul.appendChild(<)
		}
	}
}