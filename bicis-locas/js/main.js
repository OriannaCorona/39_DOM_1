function validateForm(){
	/* Escribe tú código aquí*/ 
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var mail = document.getElementById("input-email").value;
	var clave = document.getElementById("input-password").value;
	if(nombre == "" || apellido == "" || mail == "" || clave == ""){
		alert("Estos campos son OBLIGATORIOS");
	}
	camposSeleccion = document.getElementById("seleccion").selectedIndex;
	if (camposSeleccion == null || camposSeleccion == 0){
		alert("Necesitas elegir alguna opción de bicicleta");
	}
}
