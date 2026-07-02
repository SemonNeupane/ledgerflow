<?php

include "../config/db.php";
include "../config/headers.php";

$data = json_decode(file_get_contents("php://input"));

$customer_id = $data->customer_id;
$transaction_type = $data->transaction_type;
$amount = $data->amount;
$transaction_date = $data->transaction_date;
$notes = $data->notes;

$sql = "INSERT INTO transactions
(customer_id,transaction_type,amount,transaction_date,notes)
VALUES
('$customer_id','$transaction_type','$amount','$transaction_date','$notes')";

if(mysqli_query($conn,$sql)){
    echo json_encode([
        "status"=>true,
        "message"=>"Transaction Added Successfully"
    ]);
}else{
    echo json_encode([
        "status"=>false,
        "message"=>"Failed to Add Transaction"
    ]);
}

?>