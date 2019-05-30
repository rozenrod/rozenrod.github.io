
<?php
$recepient = "rozenrod320@gmail.com";
$sitename = "Rozenrod.github.io/.";

$name = trim($_POST["name"]);
$text = trim($_POST["text"]);
$email = trim($_POST["email"]);
$message = "Почта: $email \nИмя: $name \nТекст: $text";

$pagetitle = "Новое сообщение с сайта \"$sitename\"😊👍";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
