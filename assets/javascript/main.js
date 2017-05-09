var prueba = [];

var addEstudiante = document.getElementById("nuevoestudiante");
addEstudiante.onclick = function() {
  var estudiante = prompt("Ingrese nuevo estudiante");
  var techSkills = prompt("Ingrese porcentaje técnico");
  var lifePoints = prompt("Ingrese habilidades socioemocionales");
  var student = new Estudiante (estudiante,techSkills,lifePoints);
  prueba.push(student);
  printHTML(student.toHTML());
};



