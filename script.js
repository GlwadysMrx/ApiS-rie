	//const inputValue = document.querySelector("input").value ? document.querySelector("input").value : "null";    = une ternary = un if sur une ligne, d'abord on test si la valeur de l'input existe avec le ? si c'est le cas on la renvoie sinon on va directe au : et on renvoi null //


document.querySelector("button").addEventListener("click", function () {
	search();	
})

document.querySelector("body").addEventListener("keydown", function(el){
	if(el.key === "Enter")
	search();
})

document.querySelector("body").addEventListener("click",function(el){
	if(el.target.classList.contains("img")) {
		el.target.parentElement.nextElementSibling.classList.toggle("hidden");
	}
})

function search(){
	const inputValue = document.querySelector("input").value; // on recupere la valeur de l'input//
    if(inputValue === ""){  // 3= verifie jusqu'au type et ne modifie pas le type, toujours ecrire 3=//
		
	} else {
		 const xhttp = new XMLHttpRequest(); 
  xhttp.open("GET", "http://api.tvmaze.com/search/shows?q=" + inputValue, false);
  xhttp.send();
		let results = JSON.parse(xhttp.response);
		document.querySelector("main").innerHTML="";
		for (let i = 0; i < results.length; i++){
		displaySerie(results[i]);
		}	
	}	
}

function displaySerie(serie){
	let target = document.querySelector("main");
	
	let card = document.createElement("DIV");
	let name = document.createElement("H1");
	let divImg = document.createElement("DIV");
	let img = document.createElement("IMG");
	let summary = document.createElement("DIV");
	let status = document.createElement("P");
	
	name.innerHTML = serie.show.name;
	if(serie.show.image === null){
		
	} else {
		img.src = serie.show.image.medium;
	}
	summary.innerHTML = serie.show.summary;
	status.innerHTML = serie.show.status;
	
	card.appendChild(name);
	card.appendChild(divImg);
	divImg.appendChild(img);
	card.appendChild(summary);
	card.appendChild(status);
	target.appendChild(card);
	
	card.classList.add("base-card");
	divImg.classList.add("base-img");
	img.classList.add("img");
	name.classList.add("base-title");
	summary.classList.add("base-summary");
	summary.classList.add("hidden");
	status.classList.add("base-status");
}