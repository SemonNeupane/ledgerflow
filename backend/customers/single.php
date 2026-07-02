<?php

include("../config/db.php");
include("../config/headers.php");

$id=$_GET['id'];

$sql="SELECT * FROM customers WHERE id=$id";

$result=mysqli_query($conn,$sql);

$customer=mysqli_fetch_assoc($result);

echo json_encode($customer);
?>