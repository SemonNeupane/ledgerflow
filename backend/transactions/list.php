<?php

include "../config/db.php";
include "../config/headers.php";

$sql="SELECT
transactions.id,
customers.customer_name,
transactions.transaction_type,
transactions.amount,
transactions.transaction_date,
transactions.notes
FROM transactions
INNER JOIN customers
ON customers.id=transactions.customer_id
ORDER BY transactions.id DESC";

$result=mysqli_query($conn,$sql);

$data=[];

while($row=mysqli_fetch_assoc($result)){
    $data[]=$row;
}

echo json_encode($data);

?>