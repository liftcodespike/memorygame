//game class that handles logic
class Game{
	constructor(){
		this.cachedCard = null;
		this.moveCount = 0;
		this.matches= 0;
	}

	updateMoveCount(){
		this.moveCount+=1;
		let counter = document.getElementById('counter');
		counter.innerHTML = `<strong>Moves Made: </strong> ${this.moveCount}`;
	}
	//returns a list of shuffled items.
	getShuffledItems(){
		var items = ["birthday-cake","bell","bicycle", "bolt", "bomb","check", "bug","gamepad"];
		for(let index = 0; index < items.length; index+=1){
			let randNum = Math.floor(Math.random() * items.length);
			let temp = items[index];
			items[index] = items[randNum];
			items[randNum] = temp;
		}
		return items;
	}
	//if two cards cards, it animates them.
	matchCards(cardToCompare){
		this.resizeAndShrink(cardToCompare);
		cardToCompare.setAttribute('matched', true);
		this.resizeAndShrink(this.cachedCard);
		this.cachedCard.setAttribute('matched', true);
		this.cachedCard = null;
		this.matches +=1;
		if(this.matches == 8){
			alert(`You have won! It took ${this.moveCount} moves! Click reset to restart.`)
		}
	}
	//this handle comparing two cards. if no card to compare against, it sets it.
	compareToCachedCard(cardToCompare){
		if(this.cachedCard == null){
			this.cachedCard = cardToCompare;
			this.shake(cardToCompare);
			return;
		}else{
			this.updateMoveCount();
			var cachedCard = this.cachedCard;
			if(cardToCompare.getAttribute('card-type') == cachedCard.getAttribute('card-type')){
				this.matchCards(cardToCompare)
				return;
			}else{
				this.shake(cardToCompare,3);
				this.shake(cachedCard,3);
				setTimeout(()=>{
					cachedCard.setAttribute('class', 'hidden');
					cardToCompare.setAttribute('class', 'hidden');
					this.cachedCard = null;
				}, 700)
			}

		}
	}
	//this method will resize and shrink card when matched with another.
	resizeAndShrink(targetElement){
	
		setTimeout(()=>{targetElement.setAttribute('style', 'transform: scale(1.2,1.2);')},20);
		setTimeout(()=>{targetElement.setAttribute('style', 'transform: scale(1.,1.2);');},150);

	}
	// fully creates a li  element to add.
	createAndSetLiItem(itemsArr, index){
		let li = document.createElement('li');
		li.setAttribute('class', 'hidden');
		li.setAttribute('card-type', `fa fa-${itemsArr[index]} fa-2x`);
		li.setAttribute('matched', false);
		return li;
	}
	//this method checks to see if the card can be flipped over
	checkForPossibleFlip(targetElement){
		if(targetElement.getAttribute('class') === 'hidden'){
			targetElement.setAttribute('class', targetElement.getAttribute('card-type'));
			this.compareToCachedCard(targetElement);
			
		}
	}

	shake(targetElement, timesToShake =1){
		
			setTimeout(()=>{targetElement.setAttribute('style', 'transform: rotate(15deg);')},99);
			setTimeout(()=>{targetElement.setAttribute('style', 'transform: rotate(-30deg);')},124);
			setTimeout(()=>{targetElement.setAttribute('style', 'transform: rotate(0deg);')},150);
			if(timesToShake >1){
				setTimeout(()=>{this.shake(targetElement, timesToShake-1)}, 100);
			}
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