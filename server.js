const  express =  require( 'express' );
var app         = express();
app.set('view engine', 'ejs');
app.use('/', function(request, response){
    response.render('index');
});
app.listen(3000);
console.log('Server is listening on port 3090');