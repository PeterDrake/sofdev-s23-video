
<!DOCTYPE html>
<html lang = "en">
    <head>
        <title>Video Compressor TEST- Upload Successful</title>
        <meta charset = "utf-8">
        <link href="compressor.css" type="text/css" rel="stylesheet">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>

    <body>
        <?php 
            $filename = $_FILES['file']['name'];
            
            $location = "upload/".$filename;

            if(move_uploaded_file($_FILES['file']['tmp_name'], $location)){
                echo "Success";
            }
            else{
                echo "Failure";
            }
        ?>

    </body>
</html>