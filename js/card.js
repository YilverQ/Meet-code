/*
	Las variables:
		consejos.
		recetas.
		productos.
	vienen de una petición POST realizada en request.js
*/

/*Declaramos las variables*/
const tags__item = document.querySelectorAll('.tags__item');
const cards_container = document.querySelector(".cards");
let card = "null";
let img = "null";
let h4 = "null";
let p = "null";
let a = "null";


//Al cargar la página debe mostrar todos los elementos.
setTimeout( () => {
	printAll();
} ,2000)


/*Función para crear un elemento (card) y agregarlo a HTML*/
function createElement(element) {
	card = document.createElement("DIV");
	img = document.createElement("IMG");
	h4 = document.createElement("H4");
	p = document.createElement("P");
	a = document.createElement("A");

	card.classList.add("card");
	img.classList.add("card__img");
	h4.classList.add("card__title");
	p.classList.add("card__description");
	a.classList.add("card__link");
	a.classList.add("card__link--disabled");
	

	/*Agregamos los valores*/
	img.src = element.image;
	h4.innerHTML = element.title;
	p.innerHTML = element.content;
	a.href = element.url;
	a.innerHTML = "Ver más";

	//Agregamos los elementos al fragmento.
	card.appendChild(img);
	card.appendChild(h4);
	card.appendChild(p);
	card.appendChild(a);
	cards_container.appendChild(card);
}


/*Eliminar todas las cartas*/
function removeAllChilds() {
	while (cards_container.hasChildNodes()){
		cards_container.removeChild(cards_container.firstChild);
	}
}


/*Funciones para imprimr en los contenidos correspondientes*/
//Todos los elementos
function printAll(argument) {
	printProductos();
	printRecetas();
	printConsejos();
}

//Productos
function printProductos(){
	productos.forEach( (element, index) => {
		createElement(element);
	})
}

//Recetas
function printRecetas() {
	recetas.forEach( (element, index) => {
		createElement(element);
	})
}

//Consejos
function printConsejos() {
	consejos.forEach( (element, index) =>{
		createElement(element);
	})
}


//Mostramos solamente las categorías correspondientes.
tags__item.forEach( (item) => {
	if (item.textContent == "Todos") {
		item.addEventListener("click", () =>{
			removeAllChilds();
			printAll();
		})
	}

	if (item.textContent == "Productos") {
		item.addEventListener("click", () =>{
			removeAllChilds();
			printProductos();
		})
	}

	if (item.textContent == "Recetas") {
		item.addEventListener("click", () =>{
			removeAllChilds();
			printRecetas();
		})
	}

	if (item.textContent == "Consejos") {
		item.addEventListener("click", () =>{
			removeAllChilds();
			printConsejos();
		})
	}
})