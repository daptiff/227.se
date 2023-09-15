<?php
// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get user input from the form
    $username = $_POST["username"];
    $password = $_POST["password"];

    // You should securely store and retrieve user credentials from a database
    // For this example, we'll use hardcoded values
    $storedUsername = "admin1";
    $storedPassword = "admin2"; // You should hash and salt passwords in a real application

    // Check if the entered credentials match the stored ones
    if ($username == $storedUsername && $password == $storedPassword) {
        // Authentication successful, redirect to a protected page
        header("Location: welcome.php");
        exit;
    } else {
        // Authentication failed, display an error message
        echo "Invalid username or password. Please try again.";
    }
}
?>