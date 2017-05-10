var arrayEstudiante = [];

function Estudiante(name,techSkill,lifePoints,status){
  this.name = name;
  this.techSkill = techSkill;
  this.lifePoints = lifePoints;
  this.status = status;
};

function addStudent(){
  
  var name = prompt("Ingrese nuevo estudiante");
  var techSkill = prompt("Ingrese porcentaje técnico");
  var lifePoints = prompt("Ingrese porcentaje habilidades socioemocionales");
  var status = prompt("Ingrese status");
  var student = new Estudiante(name,techSkill,lifePoints,status);

  arrayEstudiante.push(student);
  print(name,techSkill,lifePoints,status);
};

function print(name,techSkill,lifePoints,status){
  var valor = document.getElementById("informacion");
  valor.innerHTML = "<br>" + name.toUpperCase() + "<br>" + "Tech Skills: " + techSkill + "%" + "<br>" + "Life Points: " + lifePoints + "%" + "<br>" + "Status: " + status + "<br><br>";
};

function imprimirTodo(){
  var valor = document.getElementById("informacion");
  valor.innerHTML = "";
  arrayEstudiante.forEach(function(el){
    valor.innerHTML += "<br>" + el.name.toUpperCase() + "<br>" + "Tech Skills: " + el.techSkill + "%" + "<br>" + "Life Points: " + el.lifePoints + "%" + "<br>" + "Status: " + el.status + "<br><br>";
  });
};

 


