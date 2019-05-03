var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
    var fileuploaded1 = document.getElementById("fileuploaded1").value;
    var fileuploaded2 = document.getElementById("fileuploaded2").value;
    var fileuploaded3 = document.getElementById("fileuploaded3").value;
    var fileuploaded4 = document.getElementById("fileuploaded4").value;
    var fileuploaded5 = document.getElementById("fileuploaded5").value;
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } 
    // else {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    //     res.write('<input type="file" name="filetoupload"><br>');
    //     res.write('<input type="submit">');
    //     res.write('</form>');
    //     return res.end();
    // }
}).listen(8080);