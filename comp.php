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
            $con = mysqli_connect("localhost","compression","compression","compression");
            $firstName = $_POST['f_name'];
            $lastName = $_POST['l_name'];
            $email = $_POST['e_mail'];
            $file = $_POST['file'];
            $size = $_POST['desired_size'];
            $date = $_POST['choose_date'];

            if($date != 'asap') {
                
                $date = $_POST['date_due'];
            }
            else{
                
                $date = date('Y-m-d');
                var_dump($date);
                $datetime = new DateTime($date);
                $datetime->add(new DateInterval('P7D'));
                //$date = $datetime->format('Y-m-d');
                var_dump($date);
            }
            echo $file; 

            $sql = "INSERT INTO `compressaur` (`FirstName`, `LastName`, `Email`, `FileLocation`, `DesiredSize`, `DueDate`) VALUES ('$firstName', '$lastName', '$email', '/haha/fake', '$size', '$date')";
            $rs = mysqli_query($con, $sql);

        	
        	echo '<p>Thank you ' . $firstName . ', your video has been successfully uploaded.</p>'; 
            if($rs){
                echo "COntact Records INSERTED";
            }
            else{
                echo "you suck";
            }
            ?>
    </body>
</html>
