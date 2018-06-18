<?php
	define("DB_SERVER", "localhost");
	define("DB_USER", "root");
	define("DB_PASS", "");
	define("DB_NAME", "test");


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

 
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", DB_USER, DB_PASS);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   // echo "Connected successfully <br />"; 
     }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }

$query=$conn->prepare("CREATE TABLE contacts (id int(6) NOT NULL auto_increment,first varchar(15) NOT NULL,last varchar(15) NOT NULL,email varchar(30) NOT NULL,message varchar(30) NOT NULL,PRIMARY KEY (id),UNIQUE id (id),KEY id_2 (id))");
$query->execute();

$conn = null;
?>