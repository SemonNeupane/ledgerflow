<?php

include("../config/db.php");
include("../config/headers.php");

$data=json_decode(file_get_contents("php://input"));

$id=$data->id;
$customer_name=$data->customer_name;
$phone=$data->phone;
$email=$data->email;
$address=$data->address;
$customer_type=$data->customer_type;
$opening_balance=$data->opening_balance;
$notes=$data->notes;

$sql="UPDATE customers SET
customer_name='$customer_name',
phone='$phone',
email='$email',
address='$address',
customer_type='$customer_type',
opening_balance='$opening_balance',
notes='$notes'
WHERE id='$id'";

if(mysqli_query($conn,$sql)){
    echo json_encode([
        "status"=>true,
        "message"=>"Customer Updated Successfully"
    ]);
}else{
    echo json_encode([
        "status"=>false,
        "message"=>"Update Failed"
    ]);
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
?>