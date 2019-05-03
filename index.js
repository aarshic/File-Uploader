// // import { fileURLToPath } from "url";
// // var formidable = require('formidable');
// // var http = require('http');

// // http.createServer(function (req, res) {
//     // res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
// //   res.write('<input type="file" name="filetoupload"><br>');
// //   res.write('<input type="submit">');
// //   res.write('</form>');
//     // return res.end();
// // }).listen(8080);

function validateMyForm(){
    // window.onbeforeunload = function() { return "Your work will be lost."; };
    var fileuploaded1 = document.getElementById("filetoupload1").value;
    var fileuploaded2 = document.getElementById("filetoupload2").value;
    var fileuploaded3 = document.getElementById("filetoupload3").value;
    var fileuploaded4 = document.getElementById("filetoupload4").value;
    res.write("yes!!!");
    if(fileuploaded1.value.length != null && fileuploaded2.value.length != null && fileuploaded3.value.length != null && fileuploaded4.value.length != null){
        alert ("Saved successfully");
        window.location = "save.html";
        return false;
    }
    else{
        alert("Field Required!!!");
    }
}