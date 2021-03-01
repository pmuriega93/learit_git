
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/registro', function(req, res){
	var nombre = req.body.nombre;
	var apellido = req.body.apellido;
	var edad = req.body.edad;
	var tel = req.body.celular;
	var paisNac = req.body.nacimiento;
	var paisRes = req.body.residencia;
	var html = "Usted se ha registrado con éxito";
	res.send(html);
})
app.listen(3000, function(){
	console.log('Aplicacion de ejemplo en el puerto 3000!');
})