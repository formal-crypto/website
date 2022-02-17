<?php

require(__DIR__ . '/../../vendor/autoload.php');

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

class Send
{
  const REQUIRED = ['name', 'email', 'message'];

  public static function createMessage($data)
  {
    return "Name: " . htmlspecialchars($data['name']) . "\nE-mail: " . htmlspecialchars($data['email']) . "\nMessage: " . htmlspecialchars($data['message']);
  }

  public static function sendTG()
  {
    self::validate();

    $message = [
      'chat_id' => $_ENV['TELEGRAM_CHAT'],
      'text'       => self::createMessage($_POST),
      'parse_mode' => 'HTML',
    ];

    $url = 'https://api.telegram.org/bot' . $_ENV['TELEGRAM_TOKEN'] . '/sendMessage';

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $message);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl);
    curl_close($curl);

    $answer = json_decode($result, false);
    print_r($answer); exit;

    if (empty($answer->ok)) {
      self::showError('Failed to send message. Try later.');
    }
  }

  public static function validate()
  {
    $errors = [];
    foreach (self::REQUIRED as $key => $field) {
      if (!key_exists($field, $_POST)) {
        $errors[] = "$field required";
      }
    }
    if ($errors) {
      self::showError(implode("\n", $errors));
    }
  }

  public static function showError($message)
  {
    http_response_code(400);

    header('Content-Type: application/json');
    echo json_encode(['message' => $message]);

    exit;
  }
}
