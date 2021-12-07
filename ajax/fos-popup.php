<?
	$to ="gal.ilvir@yandex.ru";

	$ip = $_SERVER['REMOTE_ADDR'];

	$subject = 'Заявка с сайта Тест. Тема: '.$_POST['tema'];
	$message = '';

	// Добавляем в сообщение заполненные поля
	if ($_POST['name']) {
		$message .= '<b>От кого: </b>'.$_POST['name'].'<br>';
	}
	if ($_POST['phone']) {
		$message .= '<b>Номер телефона: </b>'.$_POST['phone'].'<br>';
	}
	if ($_POST['text']) {
		$message .= '<b>Сообщение: </b>'.$_POST['text'].'<br>';
	}
	$message .= '<b>IP клиента: </b>'.$ip.'<br>';

	if (($_POST['name'] !='' ) and ($_POST['name'] != ' ')) {
		$headers  = "Content-type: text/html; charset=utf-8 \r\n";
		$headers .= "From:stomatologia-podolsk.ru <info@stomatologia-podolsk.ru>\r\n";
		$headers .= "Reply-To: info@stomatologia-podolsk.ru\r\n";

		if(mail($to, $subject, $message, $headers, '-f info@stomatologia-podolsk.ru')){
			echo '<div class="popup-block__title">Спасибо, заявка принята</div><div class="popup-preview">В ближайшее время с Вами свяжется наш менеджер</div>';
		} else {
			echo 'Письмо не отпарвилось';
		}
	}
?>