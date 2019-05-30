<?php
// Данные из формы
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);

// Данные SFTP
$sftp_server = 'mail.adm.tools';
$sftp_login = 'help@rozenrod.pro';
$sftp_password = 'z10ped16';

$sitename = "Rozenrod";
$recepient = "help@rozenrod.pro";
$domain = "Rozenrod.pro";

$theme = 'Спасибо, что выбрали Rozenrod. / Thanks for choosing Rozenrod.';
$to_text = '<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
</head>
<body>
	<center>
		<div style="padding: 0px;width: 448px;background-color: #f6f6f6;">
	        <p style="font-family: Helvetica Neue,Helvetica,Arial,Verdana,sans-serif; font-size: 30px;color: #ffffff;font-weight: 900;background: #2f2f2f;padding: 7px;">ROZENROD</p>
	        <p style="font-family: Roboto Condensed, sans-serif; font-weight: 400; font-size: 20px;color: #4e4e4e;padding: 0px 0 10px 0;text-align: center;">Спасибо, что выбрали Rozenrod.</p>
			<p style="font-family: Roboto Condensed, sans-serif; font-weight: 400; font-size: 16px;color: #4e4e4e;text-align: left;padding: 0 10px 0 10px;">
				Привет '.$name.',
			</p>
			<p style="font-family: Roboto Condensed, sans-serif; font-weight: 400; font-size: 16px;color: #4e4e4e;text-align: left;padding: 0 10px 0 10px;">
				Благодарим вас за сообщение, мы свяжемся с вами в ближайшее время.
			</p>
			<p style="font-family: Roboto Condensed, sans-serif; font-weight: 400; font-size: 16px;color: #4e4e4e;text-align: left;padding: 0 10px 0 10px;">
				С уважением, Rozenrod
			</p>
			<hr style="margin: 10px;border: 0.5px solid #4e4e4e;"/>
			<p style="font-family: Roboto Condensed, sans-serif; font-weight: 400; font-size: 20px;color: #4e4e4e;padding: 0px 0 10px 0;text-align: center;">Thanks for choosing Rozenrod.</p>
			<p style="font-family: Roboto Condensed, sans-serif; font-weight: 400; font-size: 16px;color: #4e4e4e;text-align: left;padding: 0 10px 0 10px;">
				Hi '.$name.',
			</p>
			<p style="font-family: Roboto Condensed, sans-serif; font-weight: 400; font-size: 16px;color: #4e4e4e;text-align: left;padding: 0 10px 0 10px;">
				Thank you for your message, we will contact you soon.
			</p>
			<p style="font-family: Roboto Condensed, sans-serif; font-weight: 400; font-size: 16px;color: #4e4e4e;text-align: left;padding: 0 10px 0 10px;">
				Sincerely, Rozenrod
			</p>
			<p>&nbsp;</p>
	    </div>
	</center>
</body>
</html>';

$pagetitle = "Новое сообщение с сайта \"$domain\"";
$message = '<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
</head>
<body>
	<center>
		<div style="padding: 0px;width: 448px;background-color: #f6f6f6;">
	        <p style="font-family: Helvetica Neue,Helvetica,Arial,Verdana,sans-serif; font-size: 30px;color: #ffffff;font-weight: 900;background: #2f2f2f;padding: 7px;">ROZENROD</p>
	        <p style="font-family: Roboto Condensed, sans-serif; font-weight: 400; font-size: 20px;color: #4e4e4e;padding: 0px 0 10px 0;text-align: center;">Новое сообщение с сайта '.$domain.'</p>
			<p style="font-family: Roboto Condensed, sans-serif; font-weight: 400; font-size: 16px;color: #4e4e4e;text-align: left;padding-left: 10px;">
				Имя: '.$name.'
			</p>
			<p style="font-family: Roboto Condensed, sans-serif; font-weight: 400; font-size: 16px;color: #4e4e4e;text-align: left;padding-left: 10px;">
				Почта: '.$email.'
			</p>
			<p style="font-family: Roboto Condensed, sans-serif; font-weight: 400; font-size: 16px;color: #4e4e4e;text-align: left;padding-left: 10px;">
				Сообщение: '.$text.'
			</p>
			<p>&nbsp;</p>
	    </div>
	</center>
</body>
</html>';

mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");

function get_data($smtp_conn)
{
$data="";
while($str = fgets($smtp_conn,515))
{
$data .= $str;
if(substr($str,3,1) == " ") { break; }
}
return $data;
}

$header="Date: ".date("D, j M Y G:i:s")." +0700\r\n";
$header.="From: $sitename <$recepient>\r\n";
$header.="X-Mailer: The Bat! (v3.99.3) Professional\r\n";
$header.="Reply-To: $sitename <$recepient>\r\n";
$header.="X-Priority: 3 (Normal)\r\n";
$header.="To: $name <$email>\r\n";
$header.="Subject: $theme\r\n";
$header.="MIME-Version: 1.0\r\n";
$header.="Content-Type: text/html; charset=utf-8\r\n";
$header.="Content-Transfer-Encoding: 8bit\r\n";

$smtp_conn = fsockopen($sftp_server, 25,$errno, $errstr, 10);
if(!$smtp_conn) {print "соединение с серверов не прошло"; fclose($smtp_conn); exit;}
$data = get_data($smtp_conn);
fputs($smtp_conn,"EHLO mail.ru\r\n");
$code = substr(get_data($smtp_conn),0,3);
if($code != 250) {print "ошибка приветсвия EHLO"; fclose($smtp_conn); exit;}
fputs($smtp_conn,"AUTH LOGIN\r\n");
$code = substr(get_data($smtp_conn),0,3);
if($code != 334) {print "сервер не разрешил начать авторизацию"; fclose($smtp_conn); exit;}

fputs($smtp_conn,base64_encode($sftp_login)."\r\n");
$code = substr(get_data($smtp_conn),0,3);
if($code != 334) {print "ошибка доступа к такому юзеру"; fclose($smtp_conn); exit;}


fputs($smtp_conn,base64_encode($sftp_password)."\r\n");
$code = substr(get_data($smtp_conn),0,3);
if($code != 235) {print "не правильный пароль"; fclose($smtp_conn); exit;}

fputs($smtp_conn,"MAIL FROM:$recepient\r\n");
$code = substr(get_data($smtp_conn),0,3);
if($code != 250) {print "сервер отказал в команде MAIL FROM"; fclose($smtp_conn); exit;}

fputs($smtp_conn,"RCPT TO:$email\r\n");
$code = substr(get_data($smtp_conn),0,3);
if($code != 250 AND $code != 251) {print "Сервер не принял команду RCPT TO"; fclose($smtp_conn); exit;}

fputs($smtp_conn,"DATA\r\n");
$code = substr(get_data($smtp_conn),0,3);
if($code != 354) {print "сервер не принял DATA"; fclose($smtp_conn); exit;}

fputs($smtp_conn,$header."\r\n".$to_text."\r\n.\r\n");
$code = substr(get_data($smtp_conn),0,3);
if($code != 250) {print "ошибка отправки письма"; fclose($smtp_conn); exit;}

fputs($smtp_conn,"QUIT\r\n");
fclose($smtp_conn);
?>
