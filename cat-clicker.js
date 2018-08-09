let lastClickTarget = "none";
const catCount = 5;
const catDetail = [{name: "Patchy", id: "Patchy-image", src: "images/cat_image_one.jpg",
                    ref: "Photo by zelle duda on Unsplash", clicks: 0, nameClick: false},
 									 {name: "Whitty", id: "Whitty-image", src: "images/cat_image_two.jpg",
									  ref: "Photo by Pixabay from pixabay.com", clicks: 0, nameClick: false},
									 {name: "Blacky", id: "Blacky-image", src: "images/cat_image_three.jpg",
									  ref: "Photo by Chinda Sam on Unsplash", clicks: 0, nameClick: false},
									 {name: "Tiger", id: "Tiger-image", src: "images/cat_image_four.jpg",
									  ref: "Photo by Clark Young on Unsplash", clicks: 0, nameClick: false},
									 {name: "Sweety", id: "Sweety-image", src: "images/cat_image_five.jpg",
									  ref: "Photo by Michael Sum on Unsplash", clicks: 0, nameClick: false}]

const imageList = document.querySelector('.image-list');
const images = document.querySelector('.images');
for (let i = 0; i < catCount; i++) {
		let element = document.createElement('li');
		element.setAttribute("id","cat"+i);
		element.innerText = catDetail[i].name;
		element.addEventListener('click', (function(i) {
				return function() {
					if(!(catDetail[i].nameClick)){
							let elementFigure = document.createElement('figure');
							elementFigure.setAttribute("id",catDetail[i].id);
							let elementChild = document.createElement('h3');
							elementChild.setAttribute("class","catName"+i);
							elementChild.innerText = catDetail[i].name;
							elementFigure.appendChild(elementChild);
							elementChild = document.createElement('img');
							elementChild.setAttribute("id", "catImage"+i);
							elementChild.setAttribute("src", catDetail[i].src);
							elementChild.setAttribute("alt", "cat image");
							elementFigure.appendChild(elementChild);
							elementChild = document.createElement('figcaption');
							elementChild.setAttribute("class","figCaption"+i);
							elementChild.innerText = catDetail[i].ref;
							elementFigure.appendChild(elementChild);
							elementChild = document.createElement('h2');
							elementChild.innerText = "Number of clicks:";
							elementFigure.appendChild(elementChild);
							elementChild = document.createElement('div');
							elementChild.setAttribute("id","catClick"+i);
							elementChild.innerText = catDetail[i].clicks;
							elementFigure.appendChild(elementChild);
							images.appendChild(elementFigure);
							catDetail[i].nameClick = true;
					}

						let clickTarget = document.getElementById(catDetail[i].id);
  					let catCountClass = document.getElementById("catClick"+i);
						let catCount = catDetail[i].clicks;
						if(lastClickTarget === "none"){
								clickTarget.style.display = "block";
						}
						else if(lastClickTarget !== clickTarget){
								console.log(lastClickTarget);
								lastClickTarget.style.display = "none";
								clickTarget.style.display = "block";
						}
						console.log(lastClickTarget);
						console.log(clickTarget);
						lastClickTarget = clickTarget;
						clickTarget.addEventListener('click', (function() {
								return function() {
										catCount++;
										catDetail[i].clicks=catCount;
										catCountClass.innerText = catCount;
								};
						})());
			};
		})(i));
		imageList.appendChild(element);
}
