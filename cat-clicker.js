let clickCountOne = 0;
let clickCountTwo = 0;
const clicksOne = document.querySelector('.clicksOne');
const targetImageOne = document.querySelector('#cat_image_one');
const clicksTwo = document.querySelector('.clicksTwo');
const targetImageTwo = document.querySelector('#cat_image_two');
let allClicks = [{target: targetImageOne, clickCount: 0},
                 {target: targetImageTwo, clickCount: 0}];

function updateClickCount(e){
	if(e.target === targetImageOne){
		clickCountOne++;
		clicksOne.innerHTML=clickCountOne;
	}
	else{
		clickCountTwo++;
		clicksTwo.innerHTML=clickCountTwo;
	}
}

allClicks.forEach(function(eachClick){
	eachClick.target.addEventListener('click', updateClickCount);
});
//targetImageOne.addEventListener('click', updateClickCount(clickCountOne, targetImageOne));
//targetImageTwo.addEventListener('click', updateClickCount(clickCountTwo, targetImageTwo));


