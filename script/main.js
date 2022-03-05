(() => {
	// set up the puzzle pieces and boards
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
		gameBoard = document.querySelector(".puzzle-board"),
		puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
		dropZones = document.querySelectorAll(".drop-zone"),
		testLink = document.querySelector("a");

	

	function resetPuzzlePieces() {
			console.log("resetPuzzlePieces-----------------");
			
			let node = document.getElementById("topLeft");
			//console.log(node);
			        
			        //let eleb = node.parentNode
			        //console.log(eleb);
			        //console.log(eleb.getAttribute('class'));
			        //console.log(node.parentNode.classname);
			        
			if (node.parentNode.getAttribute('class') == "drop-zone topLeft") {
			    node.parentNode.removeChild(node);
			}
			
		}
			
	function changeBgImg() {
			gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
			//gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
			 resetPuzzlePieces();
			 }


	function dragStarted(event) {
		console.log('stared draggin a piece');
		event.dataTransfer.setData('currentItem', event.target.id);
	}
// use the setData method of the drag event to store a reference to the current element
	
	function allowDragOver(event) {
		event.preventDefault();
		console.log('dragged over me');
	}
//turn off the default behaviour--we want to allow drag

	function allowDrop(event) {
		event.preventDefault();
		console.log('dropped on me');
	
//turn off the default behaviour--follow this instruction instead of what brower would normally do on drop
		let droppedEl = event.dataTransfer.getData('currentItem');
		console.log(droppedEl);
		
		imgNum = this.children.length;
        console.log("exsit img numbers: "+imgNum);

        if (imgNum == 0) {
            this.appendChild(document.querySelector(`#${droppedEl}`));}
    }

		
	//move the dragged element into the current drop zone;
	//appendChild is a build-in JS function that adds an element to another as a child

//this was set in th drag event using the setData method
//the function includes the let. if not, the event behind the let is undefined.

	function turnAnchorOff(e) {
		e.preventDefault();
	}

	
	//add event handling --loop through the thumbnails array and add event
	theThumbnails.forEach(item => item.addEventListener("click", changeBgImg));
	//listen for the dragstared event on the puzzlepieces 
	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));
	//add event handling for the drop zone(drag over and drop)
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	});

	testLink.addEventListener("click", turnAnchorOff);

})();
