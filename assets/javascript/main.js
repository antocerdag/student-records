
//suponiendo que el constructor esta hecho, se agrega funcionalidad del boton printAll

//suponemos a priori que en el onclick del botón PrintAll, se encuentra la función imprimirTodo()

//object nuevaEstudiante

function imprimirTodo(nuevaEstudiante){
	var arrayEstudiante = [];
	arrayEstudiante.push(nuevaEstudiante);
	var ficha = document.getElementById("botonprint");
	arrayEstudiante.forEach(function(element){
		ficha.innerHTML = "<div>" + "Nombre: " + element.nombre + "<br>" + "Tech Skills: " + element.techSkill + "%" + "<br>" + "Life Skills: " + element.lifeSkill + "%" + "Status: " + element.actividad + "</div>"
	});
} 


function AddStudent(name, techSkills, lifePoints, status) {
  this.name = name;
  this.techSkills = techSkills ;
  this.lifePoints = lifePoints;
  this.status = status;


}

var addEstudiante = document.getElementById("nuevoestudiante");
addEstudiante.onclick = function() {
  var name = prompt("Ingrese nuevo estudiante");
  var techSkills = prompt("Ingrese porcentaje técnico");
  var lifePoints = prompt("Ingrese habilidades socioemocionales");
  var status = prompt("Ingrese status");
  var student = new AddStudent (name,techSkills,lifePoints,status);
  var prueba = [];
  prueba.push(student);
};

 


