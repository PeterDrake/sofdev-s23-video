<?php
$source = 'olivereatapple.mp4';
$orig_file_size = filesize($source);
$destination = "uploads/video.mp4";

$chunk_size = 256;
$upload_start = 0;

$handle = fopen($source, "rb");

$fp = fopen($destination, 'w');

while($upload_start < $orig_file_size) {
    $contents = fread($handle, $chunk_size);
    fwrite($fp, $contents);

    $upload_start += strlen($contents);
    fseek($handle, $upload_start);
}

fclose($handle);
fclose($fp);
