function cambiaIdioma(idioma){
	var ingreso = document.getElementById("form-signin-heading");
	var check = document.getElementById("check");
	var btnSignIn = document.getElementById("inputSignIn");
	if (idioma=="es"){
		ingreso.innerHTML = "Por favor inicia sesión";
		check.innerHTML = "Recordar datos";
		btnSignIn.innerHTML = "Iniciar Sesión";
		document.getElementById("inputEmail").setAttribute("placeholder", "Correo Electrónico");
		document.getElementById("inputPassword").setAttribute("placeholder", "Contraseña");

	}else{
		if (idioma=="en"){
		ingreso.innerHTML = "Pleace sign in";
		check.innerHTML = "Remember me";
		btnSignIn.innerHTML = "Sign in";
		document.getElementById("inputEmail").setAttribute("placeholder", "Please enter your email");
		document.getElementById("inputPassword").setAttribute("placeholder", "Password");
	}
}
}
var btnEs = document.getElementById("btnEs");
btnEs.onclick = function (){
	cambiaIdioma("es");
};
var btnEn = document.getElementById("btnEn");
btnEn.onclick = function (){
	cambiaIdioma("en");
};