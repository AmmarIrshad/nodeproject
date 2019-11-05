var http = require('http');
var fs = require('fs');
var mysql = require('mysql');
var bodyParser = require('body-parser')


var express = require('express')
var app = express()
var port =  8000;
var path = require('path');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname+'/ammar.html'));
})

app.post('/api/', (req, res) => {
  console.log("here is data")
  
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "currency"
  });
  console.log(req.body)
  let currency=req.body.currency;
  let name=req.body.name;
  let amount=req.body.amount;

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `INSERT INTO record (currency, name,amount) VALUES ('${currency}', '${name}',${amount})`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
  
  res.status(200).send({
    success: 'true',
    amount,currency,name
  })

});
app.listen(port);
console.log('server started on: ' + port);