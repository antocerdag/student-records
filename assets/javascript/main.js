var arrayEstudiante = [];

function Estudiante(name,techSkill,lifePoints,status){
  this.name = name;
  this.techSkill = techSkill;
  this.lifePoints = lifePoints;
  this.status = status;
};

function addStudent(){
  
  var name = prompt("Ingrese nuevo estudiante").toLowerCase();
  var techSkill = prompt("Ingrese porcentaje técnico");
  var lifePoints = prompt("Ingrese habilidades socioemocionales");
  var status = prompt("Ingrese status");
  var student = new Estudiante(name,techSkill,lifePoints,status);

  arrayEstudiante.push(student);
  print(name,techSkill,lifePoints,status);
};

function print(name,techSkill,lifePoints,status){
  var value = document.getElementById("informacion");

  value.innerHTML = name + "<br>" + "Tech Skills: " + techSkill + "%" + "<br>" + "Life Points: " + lifePoints + "%" + "<br>" + status;
};

function imprimirTodo(nuevaEstudiante){
  
  arrayEstudiante.forEach(function(el){
    resultado.innerHTML += el.name + "<br>" + "Tech Skills: " + el.techSkill + "%" + "<br>" + "Life Points: " + el.lifePoints + "%" + "<br>" + el.status;
  })
  };

 


