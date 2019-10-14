var express = require('express');
var app = express();
bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: true});
var router = express.Router();
var fs = require('fs');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
var counter = 0;
router.route('/blogs').get(function(req, res)
{
    res.json(topics);
})

router.route('/blogs/:id')
                .get(function(req, res)
                {
                    for (article of topics){
                        if(article.id == req.params.id){
                            res.json(article);
                            return;
                        }
                    }
                res.json({'error': 'Blog not found'})
                })
                .delete(function(req, res){
                    for (var article in topics){
                        if(topics[article].id == req.params.id){
                            topics.splice(article, 1);
                            saveBlog();
                            res.json("{msg: 'Blogi poistettu'}");return;}}
                            res.json("{'msg:': 'Error, blogia ei löydy!'}");
                        }
                    
                
                )
                .post(function(req, res){
                   console.dir(req.body);
                   let nb = req.body;
                   nb.id = counter++;
                   topics.push(nb);
                   console.dir(topics);
                   saveBlog();
                   console.log("Lisätään blogia ...");
                   res.status(201);
                   res.json(nb);
                   return;
                })

//fswriteFile("cars.json", JSON.stringify(cars), ()=>{console.log("Autot tallennettu")})

var topics = [];
app.use('/api', router);
function saveBlog(){
    fs.writeFile("topics.json", JSON.stringify(topics), function(){
        console.log("Blogit päivitetty!");
    })
}

var server = app.listen(port=3001, function(){
    var host = server.address().address; var port = server.address().port;
    fs.readFile("topics.json", function(err, data){
        console.log("Blogit haettu");
        topics = JSON.parse(data);
        console.dir(topics);
    })
    console.log("Listening at http://%s%s", host, port);

})