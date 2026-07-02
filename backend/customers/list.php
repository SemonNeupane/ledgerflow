<?php

include("../config/db.php");
include("../config/headers.php");

$sql="SELECT * FROM customers ORDER BY id DESC";

$result=mysqli_query($conn,$sql);

$customers=[];

while($row=mysqli_fetch_assoc($result)){
    $customers[]=$row;
}

echo json_encode($customers);
?>