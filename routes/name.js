var express = require('express');
var router = express.Router();
var namemd = require('./../model/namemd.js')

var sql = require("./../model/sql.js");
/* GET home page. */
router.get('/', function(req, res, next) {
    //let x=[];
    // xa().then((msg) => res.send(msg));
    // res.render("name.ejs", { nameData: x });
   //namemd.all().then((x) => res.render("name.ejs", { nameData: x }));
    
    sql.getAll().then((x) => res.render("name.ejs", { nameData: x }));
});
router.post("/add",(req,res)=>{
    console.log(req.body);
    sql.insertName(req.body["name"]);
    res.send("Name: " + req.body['name'])
})
module.exports = router;



// async function xa(){
//     let x = await sql.getAll()
//     console.log(x)
// }
// xa()