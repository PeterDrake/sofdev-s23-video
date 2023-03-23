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

            ini_set('display_errors', 1);
            ini_set('display_startup_errors', 1);
            error_reporting(E_ALL);

            $con = mysqli_connect("localhost","compression","compression","compression");
            $firstName = $_POST['f_name'];
            $lastName = $_POST['l_name'];
            $email = $_POST['e_mail'];
            $size = $_POST['desired_size'];
            $date = $_POST['choose_date'];

            $file = $_FILES['video']['tmp_name'];
            $filename = $_FILES['video']['name'];
            $filesize = $_FILES['video']['size'];
            $upload_dir = 'uploads';
            $target_file = $upload_dir . DIRECTORY_SEPARATOR . $filename;

            if (move_uploaded_file($file, $target_file)) {
                if($date != 'asap') {

                    $date = $_POST['date_due'];
                }
                else{

                    $date = date('Y-m-d');
                    $datetime = new DateTime($date);
                    $datetime->add(new DateInterval('P7D'));
                    $date = $datetime->format('Y-m-d');
                }
                echo $file;

                $sql = "INSERT INTO `compressaur` (`FirstName`, `LastName`, `Email`, `FileLocation`, `DesiredSize`, `DueDate`) VALUES ('$firstName', '$lastName', '$email', '$filename', '$size', '$date')";
                $rs = mysqli_query($con, $sql);


                echo '<p>Thank you ' . $firstName . ', your video has been successfully uploaded.</p>';
                if($rs){
                    echo "Records INSERTED";
                }
                else{
                    echo "you suck";
                }
            } else {
                echo 'File upload failed.';
            }

            ?>
    <p id="timer"></p>
    <script>
        let timer = document.getElementById("timer");
        let time = 5;

        var countdown = setInterval(function() {
            if (time <= 0) {
                clearInterval(countdown);
            }
            timer.innerHTML = `You will be redirected in ${time} seconds.`;
            time -= 1;
        }, 1000);
        <?php
            header("Refresh:6; url=index.html");
        ?>
    </script>
    </body>
</html>
<!--    header("Refresh:5; url=index.html");-->