var name = document.getElementById("name");
var lastname = document.getElementById("lastname");
var mail = document.getElementById("input-email").value;
var pwd = document.getElementById("input-password").value;
var selection = document.getElementById("select");
var spanMessage = document.getElementsByClassName('span');

//RegExpresion Mail 
regxmail = /\w+@\w+\.+[a-z]/;
regxInput = /^[a-z][a-z]*/;

function validateForm(){
//validando valor nullo - vacio - [A-Z] para name
	if(name.length == 0){
		messageSpan("Ingrese un nombre valido",0);
	}else{
		displaySpan(0);
	}
	if (name.value.charAt(0) != name.value.charAt(0).toUpperCase()){
		messageSpan("La primera letra debe ser Mayúscula",0);
	}
	else{
		displaySpan(0);
	}
	//validando valor nullo - vacio - [A-Z] para name
	if (lastname.value.charAt(0) != lastname.value.charAt(0).toUpperCase()) {
		messageSpan("La primera letra debe ser Mayúscula",1);
	}else{
		displaySpan(0);
	}
	if(lastname.length == 0 || !regxInput.test(lastname)){
		messageSpan("Ingrese un Apellido valido",1);
	}else{
		displaySpan(1);
	}
	//Validando  mail 
	if(!regxmail.test(mail)){
		messageSpan("verifique su email",2);
	}else{
		displaySpan(2);
	}
	//validando password
	if (pwd.value == "password" || pwd.value == "123456" || pwd.value == "098754" || pwd.length == 0) {
		messageSpan("La contraseña debe tener al menos 6 caracteres",3);
	}else{
		displaySpan(3);
	}
	//validando select
	if (selection.selectedIndex == 0){
		messageSpan("Debes seleccionar al menos un  tipo de bici",4);
	}else{
		messageSpan(4);
	}
}

function messageSpan(message,index){
	spanMessage[index].innerHTML="";
	spanMessage[index].innerHTML=message;
	spanMessage[index].style.display='block';
}

function displaySpan(index){
	spanMessage[index].innerHTML="";
	spanMessage[index].style.display='none';
}
