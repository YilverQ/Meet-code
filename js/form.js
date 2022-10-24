/*Variables globales*/
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const listInputs = [firstname, lastname, email, phone];
const buttom = document.getElementById('buttom');

/*Los campos inician en false*/
const inputsBoolean = {
	firstname : false,
	lastname : false,
	email : false,
	phone : false
}

/*Expresión regular*/
const regular = {
	firstname: /^[a-zA-ZÀ-ÿ\s]{3,15}$/,
	lastname: /^[a-zA-ZÀ-ÿ\s]{3,15}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
	phone: /^\d{7,14}$/
}


/*Chequeamos que el input no esté vacio*/
const checkInput = (e) => {
	let input = e.currentTarget;

	if(regular[input.name].test(input.value)){
		input.classList.remove("form__input--error");
		inputsBoolean[input.name] = true;
	}else{
		input.classList.add("form__input--error")
	}
}


/*Buttom Disabled and enabled*/
const buttomChange = () =>{
	if (inputsBoolean.firstname && inputsBoolean.lastname && inputsBoolean.email && inputsBoolean.phone) {
		buttom.classList.remove("buttom--disabled");
		buttom.disabled = false;
	}else{
		buttom.classList.add("buttom--disabled");
		buttom.disabled = true;
	}
}


/*Escuchamos los eventos de los inputs*/
listInputs.forEach((input) => {
	//console.log(input);
	input.addEventListener("keyup", checkInput);
	input.addEventListener("blur", checkInput);
	input.addEventListener("keyup", buttomChange);
	input.addEventListener("blur", buttomChange);
});

buttomChange();