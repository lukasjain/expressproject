var express = require('express');
var router = express.Router();

router.get('/:id/:name', function(req, res, next){
  //  console.log(req);
    if(req.params.id>0) {
      res.send('Hello '+req.params.name);
    }
    else {
      res.send('you are not sefwallowed');
    }
    next();
});

router.get('/*', function(req, res, next){
    res.send('nothing');
    next();
    //console.log(req);
});

router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;
