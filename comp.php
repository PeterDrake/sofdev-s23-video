<!DOCTYPE html>
<html lang = "en">
    <head>
        <title>Video Compressor - Upload Successful</title>
        <meta charset = "utf-8">
        <link href="compressor.css" type="text/css" rel="stylesheet">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>

    <body>
        <div class="header">
            <img src="usedMedia/CompressionHeader.png" alt="Compression Logo" style="width:100%;">
            <div class="Header_Text">LC Video Compression</div>
        </div>
        <?php
            ini_set('display_errors', 1);
            ini_set('display_startup_errors', 1);
            error_reporting(E_ALL);

            // function to get random hex
            function getRandomHex($num = 4) {
                return bin2hex(openssl_random_pseudo_bytes($num));
            }

            $con = mysqli_connect("localhost","compression","compression","compression");
            $firstName = $_POST['f_name'];
            $lastName = $_POST['l_name'];
            $email = $_POST['e_mail'];
            $size = $_POST['desired_size'];
            $date = $_POST['choose_date'];

            $file = $_FILES['video']['tmp_name'];
            $filename = $_FILES['video']['name'];
            $filesize = $_FILES['video']['size'];
            $upload_dir = 'input';


            $path = pathinfo($filename);
            $videoname = $path['filename'] . getRandomHex(4) . '.' . $path['extension'];
            $target_file = $upload_dir . DIRECTORY_SEPARATOR . $videoname;


            if (move_uploaded_file($file, $target_file)) {
                if($size == 'small') {
                    $size = 'H.265 MKV 480p30';
                } else if($size == 'medium') {
                    $size = 'H.265 MKV 720p30';
                } else if($size == 'large') {
                    $size = 'H.265 MKV 1080p30';
                }
                if($date != 'asap') {
                    $date = $_POST['date_due'];
                }
                else{
                    $date = date('Y-m-d');
                    $datetime = new DateTime($date);
                    $datetime->add(new DateInterval('P7D'));
                    $date = $datetime->format('Y-m-d');
                }

                $sql = "INSERT INTO `compressaur` (`FirstName`, `LastName`, `Email`, `FileLocation`, `DesiredSize`, `DueDate`) VALUES ('$firstName', '$lastName', '$email', '$videoname', '$size', '$date')";
                $rs = mysqli_query($con, $sql);
                if($rs){
                    echo '<div class="bodyParagraphs"><div class="paragraph">Video uploaded successfully.
                            <form action="index.html">
                                <p>
                                    <input type="submit" value="Return to Homepage" class="submit" id="redirectButton">
                                </p>
                            </form></div></div>';
                }
                else{
                    echo '<div class="bodyParagraphs"><div class="paragraph">SQL failed.
                            <form action="index.html">
                                <p>
                                    <input type="submit" value="Return to Homepage" class="submit" id="redirectButton">
                                </p>
                            </form></div></div>';
                }
            } else {
                echo '<div class="bodyParagraphs"><div class="paragraph">File upload failed.
                        <form action="index.html">
                            <p>
                                <input type="submit" value="Return to Homepage" class="submit" id="redirectButton">
                            </p>
                        </form></div></div>';
            }
        ?>
    </body>
</html>
