let lastCatImage;
let isLastCatImage = false;
const clicksNameOne = document.querySelector('.Patchy-name');
const targetImageOne = document.querySelector('#cat_image_one');
const clicksNameTwo = document.querySelector('.Whitty-name');
const targetImageTwo = document.querySelector('#cat_image_two');
const clicksNameThree = document.querySelector('.Blacky-name');
const targetImageThree = document.querySelector('#cat_image_three');
const clicksNameFour = document.querySelector('.Tiger-name');
const targetImageFour = document.querySelector('#cat_image_four');
const clicksNameFive = document.querySelector('.Sweety-name');
const targetImageFive = document.querySelector('#cat_image_five');
const clicksImageOne = document.querySelector('#clicks-one');
const clicksImageTwo = document.querySelector('#clicks-two');
const clicksImageThree = document.querySelector('#clicks-three');
const clicksImageFour = document.querySelector('#clicks-four');
const clicksImageFive = document.querySelector('#clicks-five');

let allCats = [
		{name: clicksNameOne, image: "Patchy-image", target: targetImageOne, clickClass: clicksImageOne},
        {name: clicksNameTwo, image: "Whitty-image", target: targetImageTwo, clickClass: clicksImageTwo},
        {name: clicksNameThree, image: "Blacky-image", target: targetImageThree, clickClass: clicksImageThree},
        {name: clicksNameFour, image: "Tiger-image", target: targetImageFour, clickClass: clicksImageFour},
        {name: clicksNameFive, image: "Sweety-image", target: targetImageFive, clickClass: clicksImageFive}
        ];

/*function updateClickCount(e){
	if(e.target === targetImageOne){
		clickCountOne++;
		clicksOne.innerHTML=clickCountOne;
	}
	else{
		clickCountTwo++;
		clicksTwo.innerHTML=clickCountTwo;
	}
}
*/

allCats.forEach(function(cat){
	let catNametoClick = cat.name;
	catNametoClick.addEventListener('click', (function(newCat) {
		return function() {
		let clickTarget = newCat.target;
		let catImage = newCat.image;
		let catCountClass = newCat.clickClass;
		let CatCount = parseInt(catCountClass.innerHTML);
		if(isLastCatImage){
			document.getElementById(lastCatImage).style.display = "none";
		}
		else{
			isLastCatImage = true;
		}
		document.getElementById(catImage).style.display = "block";
		lastCatImage = catImage;
		clickTarget.addEventListener('click', (function(newCatCountClass, newCatCount) {
			return function() {
			newCatCount++;
			newCatCountClass.innerHTML=newCatCount;
			};
		})(catCountClass, CatCount));
	};
})(cat));
});
