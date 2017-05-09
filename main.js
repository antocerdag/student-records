//suponiendo que el constructor esta hecho, se agrega funcionalidad del boton printAll

//suponemos a priori que en el onclick del botón PrintAll, se encuentra la función imprimirTodo()

//object nuevaEstudiante

function imprimirTodo(nuevaEstudiante){
	var arrayEstudiante = [];
	arrayEstudiante.push(nuevaEstudiante);
	var ficha = 
	arrayEstudiante.forEach(function(element){
		cosa.innerHTML = "<div>" + "Nombre: " + element.nombre + "<br>" + "Tech Skills: " + element.techSkill + "%" + "<br>" + "Life Skills: " + element.lifeSkill + "%" + "Status: " + element.actividad + "</div>"
	});
} 