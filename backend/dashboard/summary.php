<?php

include "../config/db.php";
include "../config/headers.php";

// Total Customers
$customerQuery = mysqli_query($conn,"SELECT COUNT(*) AS total FROM customers");
$totalCustomers = mysqli_fetch_assoc($customerQuery)['total'];

// Total Transactions
$transactionQuery = mysqli_query($conn,"SELECT COUNT(*) AS total FROM transactions");
$totalTransactions = mysqli_fetch_assoc($transactionQuery)['total'];

// Total Received
$receivedQuery = mysqli_query($conn,"SELECT SUM(amount) AS total FROM transactions WHERE transaction_type='Received'");
$totalReceived = mysqli_fetch_assoc($receivedQuery)['total'];
if($totalReceived==NULL){
    $totalReceived=0;
}

// Total Paid
$paidQuery = mysqli_query($conn,"SELECT SUM(amount) AS total FROM transactions WHERE transaction_type='Paid'");
$totalPaid = mysqli_fetch_assoc($paidQuery)['total'];
if($totalPaid==NULL){
    $totalPaid=0;
}

echo json_encode([
    "total_customers"=>$totalCustomers,
    "total_transactions"=>$totalTransactions,
    "total_received"=>$totalReceived,
    "total_paid"=>$totalPaid
]);

?>