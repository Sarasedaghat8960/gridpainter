var express = require('express');
var router = express.Router();
const cors=require("cors");
/* GET users listing. */
router.get('/', function(req, res, next) {
  req.app.locals.db.collection("grid").find().toArray()
.then(results=>{
res.send(results);
})
  });

router.post("/color", function(req, res){
  let findBox=req.body;
  console.log("find box from post in backend:",findBox);
  let newColor=findBox.boxColor;
  console.log("new color :",newColor);
  req.app.locals.db.collection("grid").find( {"boxName":findBox.boxName} ).toArray()
  .then(coloredBox => {
    console.log("coloredBox",coloredBox);
    //req.app.locals.db.collection("grid").insertOne(req.body)
    //req.app.locals.db.collection("grid").deleteOne( {"boxName" : coloredBox[0].boxName}, {$set: {"boxColor": newColor}})
    req.app.locals.db.collection("grid").updateOne( {"boxName" : coloredBox[0].boxName}, {$set: {"boxColor": newColor}})
      .then(result=>{
       //console.log(result);
  })  
  res.json({"status":"color  changed"})
 
  })
});


router.post("/finish", function(req, res){
  let gameOvered=req.body;
 // console.log("gameOvered from post in backend:",gameOvered);
  req.app.locals.db.collection("facit2").find().toArray()
  .then(checkGame => {
    //console.log("checkgame",checkGame);
    let score = 0
    for(let i=0;i<=224;i++){
       if(gameOvered[i].boxName==checkGame[i].boxName && gameOvered[i].boxColor==checkGame[i].boxColor ){
         score++
       }
    }
   console.log(score);
  
  
  })  
  res.json({"facit":"checked"})
 
 
});
module.exports = router;
