var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "Formget" && password == "formget#123"){
        alert ("Login successfully");
        window.location = "http://localhost:8080/"; // Redirecting to other page.
        {
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write('</form>');
            // if(req.url == '/fileupload') {
            //     var form = new formidable.IncomingForm();
            //     form.parse(req, function (err, fields, files) {
            //         res.write('File uploaded');


            //         {
            //             if (req.url == '/fileupload') {
            //                 var form = new formidable.IncomingForm();
            //                 form.parse(req, function (err, fields, files) {
            //                     var oldpath = files.filetoupload.path;
            //                     var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
            //                     fs.rename(oldpath, newpath, function (err) {
            //                         if (err) throw err;
            //                             res.write('File uploaded and moved!');
            //                         res.end();
            //                 });
            //             });
            //             } 
            //             else {
            //                 res.writeHead(200, {'Content-Type': 'text/html'});
            //                 res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            //                 res.write('<input type="file" name="filetoupload"><br>');
            //                 res.write('<input type="submit">');
            //                 res.write('</form>');
            //                 return res.end();
            //             }
            //         }

            //         res.end();
            //     });
            // } 
            // else {
            //     res.writeHead(200, {'Content-Type': 'text/html'});
            //     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            //     res.write('<input type="file" name="filetoupload"><br>');
            //     res.write('<input type="submit">');
            //     res.write('</form>');
            //     return res.end();
            // }
            return res.end();
        }
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}