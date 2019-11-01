var express = require('express');
var app = require('../app');
var router = express.Router();

var users = [{id:"0",name: "WOOHOO", age: "2"},{id:"1",name: "HOOWOO", age: "22"},];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
  
});
router.route('/')
        // .get((req,res,next)=>{
        //   const users = [{_id: 1, name: 'John', age: '22'},
        //   {_id: 2, name: 'James', age: '19'},
        //   {_id: 3, name: 'Jane', age: '31'},
        //   {_id: 5, name: 'Johan', age: '27'},
        //   {_id: 42, name: 'Pekka', age: '48'},
        //   ];
        //   res.send(users);
        // })
        .post((req,res)=>{
          const data = req.body;
          res.status(201)
              .location('/api/users/'+100)
              .send();
        })
        .delete((req,res)=>{
          for (n in nimet){
            if(nimet[n].id == req.param.id){
              cars.splice(n, 1);
              res.json("{msg: 'nimi poistettu'}");return;
            }
          }
        })
module.exports = router;
