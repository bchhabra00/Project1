var fs = require("fs");

var data = fs.readFile(__dirname + '/posts/post_one.txt','utf8',(err, data) => {
  if (err) console.log(err);
  console.log(data);
  
  
  var template =`
<html>
  <body>
    <div>${data}</div>
  </body>
</html>
`;


fs.writeFile(__dirname + '/build/post3.html', template.trim(), 'utf8', (err) => {
  if (err) console.log(err);
  
});
});






// var read = fs.createReadStream(__dirname +'/posts/post_one.txt', 'utf8' );
// var write = fs.createWriteStream(__dirname + '/build/postone.html','utf8');







