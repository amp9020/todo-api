var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [];
var todoNextId = 1;


app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('11111ToDo API Root');
});


app.get('/todos', function(req, res) {
	res.json(todos);
});


app.get('/todos/:id', function(req, res){
//	res.send('asking for todo with id of ' + req.params.id);
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;
	
	todos.forEach(function (todo){
	if (todoId === todo.id){
		matchedTodo = todo;
	}

});

	if (matchedTodo) {
	res.json(matchedTodo);
	} else {
		res.status(404).send();
	}

});


app.post('/todos', function(req, res){
console.log('hello post');

 var body = req.body;

 console.log('description: ' + body.description);

 body.id = todoNextId++;
 todos.push(body);


 res.json(body);

});




app.listen(PORT, function(){
	console.log('express listening on port ' + PORT + ' ! ');
});
