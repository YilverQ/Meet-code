let productos = [];
let recetas = [];
let consejos = [];

async function fetchPost() {
    await fetch("https://5eed24da4cbc340016330f0d.mockapi.io/api/articles")
      .then(response => response.text())
      .then(data => {
        const json = JSON.parse(data);
        json.forEach( (item, index) => {
        	if (item.category == "Recetas"){
        		recetas.push(item);
        	}
        	if (item.category == "Productos"){
        		productos.push(item);
        	}
        	if (item.category == "Consejos"){
        		consejos.push(item);
        	}
        })
      });
}

fetchPost();

productos.forEach( (element, index) => {
    console.log(element);
})