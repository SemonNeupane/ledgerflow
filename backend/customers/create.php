<?php

include "../config/db.php";
include "../config/headers.php";

$data=json_decode(file_get_contents("php://input"));

$customer_name=$data->customer_name;
$phone=$data->phone;
$email=$data->email;
$address=$data->address;
$customer_type=$data->customer_type;
$opening_balance=$data->opening_balance;
$notes=$data->notes;

$sql="INSERT INTO customers
(customer_name,phone,email,address,customer_type,opening_balance,notes)
VALUES
('$customer_name','$phone','$email','$address','$customer_type','$opening_balance','$notes')";

if(mysqli_query($conn,$sql)){
    echo json_encode([
        "status"=>true,
        "message"=>"Customer Added Successfully"
    ]);
}else{
    echo json_encode([
        "status"=>false,
        "message"=>"Failed to Add Customer"
    ]);
}
?>