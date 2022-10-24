const menu = document.querySelectorAll(".tags__item");
const icons = document.querySelectorAll(".icon-tag");

/*Removemos la selección de un elemento dentro del menu*/
function diselected(item) {
	menu.forEach( (item) => {
		item.classList.remove("tags__item--selected");
	})
	icons.forEach( (icon) => {
		icon.classList.add("icon-tag--disabled");
	})
}


/*Escuchamos los eventos del menu*/
menu.forEach((item, index) => {
	item.addEventListener("click", function (){
		diselected();
		item.classList.add("tags__item--selected");
		icons[index].classList.remove("icon-tag--disabled")
	});
});