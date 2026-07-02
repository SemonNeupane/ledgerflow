<?php

include "../config/db.php";
include "../config/headers.php";

$data=json_decode(file_get_contents("php://input"));

$id=$data->id;
$customer_id=$data->customer_id;
$transaction_type=$data->transaction_type;
$amount=$data->amount;
$transaction_date=$data->transaction_date;
$notes=$data->notes;

$sql="UPDATE transactions SET
customer_id='$customer_id',
transaction_type='$transaction_type',
amount='$amount',
transaction_date='$transaction_date',
notes='$notes'
WHERE id='$id'";

if(mysqli_query($conn,$sql)){
    echo json_encode([
        "status"=>true,
        "message"=>"Transaction Updated Successfully"
    ]);
}else{
    echo json_encode([
        "status"=>false,
        "message"=>"Update Failed"
    ]);
}

?>