var productos = [];

var addStudent = document.getElementById('nuevacompra');
addCompra.onclick = function() {
  var compra = prompt('Ingrese su nueva compra');
  var cantidad = prompt('Ingrese la cantidad');
  var product  = new Producto (compra, cantidad);
  productos.push(product);
  printHTML(product.toHTML());
};