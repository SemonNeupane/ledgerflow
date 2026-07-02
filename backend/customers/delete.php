<?php

include("../config/db.php");
include("../config/headers.php");

$id=$_GET['id'];

$sql="DELETE FROM customers WHERE id='$id'";

if(mysqli_query($conn,$sql)){
    echo json_encode([
        "status"=>true,
        "message"=>"Customer Deleted Successfully"
    ]);
}else{
    echo json_encode([
        "status"=>false,
        "message"=>"Delete Failed"
    ]);
}
?>