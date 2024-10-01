<?php
$number1=10;$number2=20;

if($number1<$number2){echo 'Number 1 is less than number 2';}else{echo 'Number 1 is not less than number 2';}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = mysql_connect($servername, $username, $password);
if (!$conn) {
    die("Connection failed: " . mysql_error());
}

mysql_select_db($dbname);

$result = mysql_query("SELECT * FROM users WHERE username = '" . $_GET['username'] . "'");

while($row = mysql_fetch_assoc($result)) {
    echo $row['name'] . "<br>";
}

echo "<h1>Welcome " . $_GET['name'] . "</h1>";

for ($i = 0; $i < count($result); $i++) {
    echo $result[$i];
}
