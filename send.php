<?php
/**
 * Send feadback message using Telegram
 */
require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

function show_error($warning) {
    http_response_code(400);

    header('Content-Type: application/json');
    echo json_encode(array('message' => $warning));

    exit;
}

function create_message($content) {
    $text = array();

    $text[] = sprintf("<b>Feedback address</b>\n%s", htmlspecialchars($content['email']));
    $text[] = sprintf("<b>Text message</b>\n%s", htmlspecialchars($content['text']));

    return implode("\n\n", $text);
}

function send_message($content) {
    $message = array(
        'chat_id'    => $_ENV['TELEGRAM_CHAT'],
        'text'       => create_message($content),
        'parse_mode' => 'HTML',
    );

    // Append from field
    $url = 'https://api.telegram.org/bot' . $_ENV['TELEGRAM_TOKEN'] . '/sendMessage';

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $message);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl);
    curl_close($curl);

    $answer = json_decode($result, false);

    if (empty($answer->ok)) {
        show_error('Failed to send message. Try later.');
    }
}

if (!isset($_POST['email'], $_POST['text'])) {
    show_error('All form fields must be filled');
}

send_message($_POST);
