<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $file = $_FILES['video']['tmp_name'];
    $filename = $_FILES['video']['name'];
    $filesize = $_FILES['video']['size'];

    $upload_dir = 'input';
    $target_file = $upload_dir . DIRECTORY_SEPARATOR .$filename;

    if (move_uploaded_file($file, $target_file)) {
        echo 'File has been uploaded successfully!';
    } else {
        echo 'File upload failed.';
    }
    echo ini_get('upload_max_filesize');
    echo ini_get('post_max_size');
}
?>
