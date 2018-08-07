let lastCatImage;
let isLastCatImage = false;
const catCount = 5;
const catDetail = [{name: "Patchy", src: "images/cat_image_one.jpg", ref: "Photo by zelle duda on Unsplash"},
 									 {name: "Whitty", src: "images/cat_image_two.jpg", ref: "Photo by Pixabay from pixabay.com"},
									 {name: "Blacky", src: "images/cat_image_three.jpg", ref: "Photo by Chinda Sam on Unsplash"},
									 {name: "Tiger", src: "images/cat_image_four.jpg", ref: "Photo by Clark Young on Unsplash"},
									 {name: "Sweety", src: "images/cat_image_five.jp", ref: "Photo by Michael Sum on Unsplash"}]
/*const imgSrc = ["images/cat_image_one.jpg", "images/cat_image_two.jpg",
                "images/cat_image_three.jpg", "images/cat_image_four.jpg",
							  "images/cat_image_five.jpg"];
const imgRef = ["Photo by zelle duda on Unsplash", "Photo by Pixabay from pixabay.com",
								"Photo by Chinda Sam on Unsplash", "Photo by Clark Young on Unsplash",
								"Photo by Michael Sum on Unsplash"];
const catName = ["Patchy", "Whitty", "Blacky", "Tiger", "Sweety"];*/
const imageList = document.querySelector('.image-list');
const images = document.querySelector('.images');
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

for (let i = 0; i < catCount; i++) {
		let element = document.createElement('li');
		element.setAttribute("id","cat"+i);
		element.innerText = catDetail[i].name;
		imageList.appendChild(element);
}
for (let i = 0; i < catCount; i++) {
		let elementFigure = document.createElement('figure');
		elementFigure.setAttribute("id","image"+i);
		let elementChild = document.createElement('h3');
		elementChild.setAttribute("class","catName"+i);
		elementChild.innerText = catDetail[i].name;
		elementFigure.appendChild(elementChild);
		/*elementChild = document.createElement('img');
		elementChild.setAttribute("id","catImage"+i);
		elementChild.innerText = "cat"+i;
		imageList.appendChild(elementChild);
		elementChild = document.createElement('figcaption');
		elementChild.setAttribute("id","cat"+i);
		elementChild.innerText = "cat"+i;
		imageList.appendChild(elementChild);
		elementChild = document.createElement('h2');
		elementChild.setAttribute("id","cat"+i);
		elementChild.innerText = "cat"+i;
		imageList.appendChild(elementChild);
		elementChild = document.createElement('div');
		elementChild.setAttribute("id","cat"+i);
		elementChild.innerText = "cat"+i;
		imageList.appendChild(elementChild);*/
		images.appendChild(elementFigure);
}
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
/*
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
*/
