<?php
if (!empty($_POST)) {
    print_r($_POST);
    echo 'Yo';
    // Файлы phpmailer
    require '../libs/php-mailer/PHPMailer.php';
    require '../libs/php-mailer/SMTP.php';
    require '../libs/php-mailer/Exception.php';

    if (isset($_POST['name']) && isset ($_POST['phone'])) {

        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];

        $mail = new PHPMailer\PHPMailer\PHPMailer();
        try {
            $msg = "ok";
            $mail->isSMTP();
            $mail->CharSet = "UTF-8";
            $mail->SMTPAuth = true;

            // Настройки вашей почты
            $mail->Host = 'smtp.gmail.com';
            $mail->Username = 'verywildweb@gmail.com';
            $mail->Password = 'buunvrqffyblylvh';
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;
            $mail->setFrom('verywildweb@gmail.com', 'veryww.ru');

            // Получатель письма
            $mail->addAddress('verywildweb@gmail.com');

            $mail->isHTML(true);

            $mail->Subject = 'Новая заявка на звонок!';
            $mail->Body = "<b>Имя:</b> $name <br>
                <b>Тел:</b> $phone<br>
                <b>Малява:</b> $message";

            if ($mail->send()) {

                echo "Ожидайте звонка, спасибо!";

            } else {
                echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
            }

        } catch (Exception $e) {
            echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
        }

    } else {
        echo "Сообщение не было отправлено. Пустые поля не допустимы!";
    }
}