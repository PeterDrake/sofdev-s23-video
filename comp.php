<!DOCTYPE html>
<html lang = "en">
    <head>
        <title>Video Compressor - Upload Successful</title>
        <meta charset = "utf-8">
        <link href="compressor.css" type="text/css" rel="stylesheet">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>

    <body>
        <?php
        	$firstName = $_POST['f_name'];
        	echo '<p>Thank you ' . $firstName . ', your video has been successfully uploaded.</p>'; ?>
    </body>
</html>