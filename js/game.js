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

	// fully creates a li  element to add.
	createAndSetLiItem(itemsArr, index){
		let li = document.createElement('li');
		li.setAttribute('class', 'hidden');
		li.setAttribute('class', `fa fa-${itemsArr[index]} fa-2x`);
		return li;
	}

	// this function returns a randomized unordered list inside a document frag to add to page.
	createCards(){
		//we create to list Items arr so we can get two items of each in a random order.
		let items1 = this.getShuffledItems();
		let items2 = this.getShuffledItems();
		let fragment = document.createDocumentFragment();
		let ul = document.createElement('ul');
		for(let index = 0; index< items1.length; index +=1){
			ul.appendChild(this.createAndSetLiItem(items1, index));
			ul.appendChild(this.createAndSetLiItem(items2, index));
		}
		fragment.appendChild(ul);
		return fragment;
	}
}