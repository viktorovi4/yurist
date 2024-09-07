<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phone = $_POST['phone'];
    $to = "alexsapan@mail.ru";  // Замените на вашу почту
    $subject = "Запрос на обратный звонок";
    $message = "Поступил запрос на обратный звонок от номера: " . $phone;
    $headers = "From: alexsapan@mail.ru";  // Замените на актуальный адрес

    // Отправляем почту
    if (mail($to, $subject, $message, $headers)) {
        echo "Ваш запрос успешно отправлен!";
    } else {
        echo "Ошибка при отправке запроса. Попробуйте позже.";
    }
}
?>
