let btnBvb = document.getElementById("button-bvb-goals");
let outputBvb = document.getElementById("result-bvb-goals");

let btnhoffenheim = document.getElementById("button-hoffenheim-goals");
let outputhoffenheim = document.getElementById("result-hoffenheim-goals");

function getRandomNumber(min, max) {
	let step1 = max - min +1
	let step2 = Math.random() * step1
	let result = Math.floor(step2) + min;
	return result;
	
}

function createArrayOfNumbers(start, end) {
	let myArray = [];
	
	for(let i = start; i<= end; i++) {
		myArray.push(i);
	}
	
	return myArray;
	
}


let numbersArray = createArrayOfNumbers(1, 5); 

btnBvb.addEventListener('click', () => {
	if (numbersArray.length == 0) {
		outputBvb.innerText = "No more random numbers";
		return;
	}
	let Solution = getRandomNumber(0, numbersArray.length-1);
	let randomNumber= numbersArray[Solution];
	numbersArray.slice(Solution, 1);
	outputBvb.innerText = randomNumber;
});// JavaScript Document

btnhoffenheim.addEventListener('click', () => {
	if (numbersArray.length == 0) {
		outputhoffenheim.innerText = "No more random numbers";
		return;
	}
	let Solution = getRandomNumber(0, numbersArray.length-1);
	let randomNumber= numbersArray[Solution];
	numbersArray.slice(Solution, 1);
	outputhoffenheim.innerText = randomNumber;
});// JavaScript Document