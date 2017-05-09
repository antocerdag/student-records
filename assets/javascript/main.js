
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


function AddStudent(name, tech-skills, life-skills, status) {
  this.name = name;
  this.tech-skills = tech-skills ;
  this.life-skills = life-skills;
  this.status = status;


}

var addEstudiante = document.getElementById("nuevoestudiante");
addEstudiante.onclick = function() {
  var estudiante = prompt("Ingrese nuevo estudiante");
  var techSkills = prompt("Ingrese porcentaje técnico");
  var lifePoints = prompt("Ingrese habilidades socioemocionales");
  var status = prompt("Ingrese status");
  var student = new AddStudent (estudiante,techSkills,lifePoints,status);
  var prueba = [];
  prueba.push(student);
};

 


