/*--- levantamos el servidor en cmd: node app.js  ---*/
var express= require('express');
/*--- para que encuentre los archivos en public ---*/
var path = require('path'); 
/*--mongoose--*/
var mongoose = require('mongoose');

var app = express();
mongoose.connect("mongodb://localhost/primeraPagina");

/*--definicion de schema - productos -- (vista)*/
var productSchema = {
	title: String,
	description:String,
	imageUrl:String,
	pricing:Number
};

/*--defincion del modelo--*/
var Product = mongoose.model("Product", productSchema);


/*jade*/
app.set("view engine", "jade");

/*---- asset: todo lo q no se va a mover y que se usa como un recurso para
construir la página --*/
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
	/*-- acepta peticion por método get en el dominio ---*/
	/*res.send(":3");
	res.end("Hola mundo"); /*--- la pagina va a esperar hasta que encuentre un end--*/
	/*-- le decimos que jale un archivo jade --*/

	/*var data = {
		title:"Bonafont",
		description:"Botella de agua",
		imageUrl:"compra de botella",
		pricing:10
	}

	var producto = new Product(data);

	producto.save(function (err){
		console.log(producto);
	});
*/

	res.render("index");

});

app.get("/articulos/nuevo", function(req,res){
	res.render("articulos/nuevo");
})


app.listen(8080);