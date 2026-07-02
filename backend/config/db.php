<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "ledgerflow"
);

if(!$conn){
    die("Database Connection Failed");
}
?>