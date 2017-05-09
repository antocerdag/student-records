
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
  var prueba = [];
  prueba.push(estudiante,techSkills,lifePoints);
  printHTML(prueba[i].toHTML());
};

