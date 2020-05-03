let a=55
a=a+5
var b = "aaaa"
var z = "bbb"
var c = b+z
var d = 5
console.log(a+""+d +"   "+ c)

const fs=require('fs');

let rawdata=fs.readFileSync('./reittiopas.json');
let student = JSON.parse(rawdata);
console.log(student);
