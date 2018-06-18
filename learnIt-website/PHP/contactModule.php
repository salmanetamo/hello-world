<title>Contact Module</title>
<link rel="icon" type="image/x-icon" href="../images/favicon.png">
<style type="text/css">
	span{
		color: #cc0000;
	}
</style>
<?php
	//The following two variables will get the name and the email of the student in order to reply
	$fullName = $_POST['name'];
	$email = $_POST['email'];

	//Print out the message to the user
	echo "<h1>Thank you for your question <span>".$fullName. "</span>.<br> We'll get back to you in three working days at <span>".$email."</span></h1>";
?>