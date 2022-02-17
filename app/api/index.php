<?php

require(__DIR__ . '/Route.php');
require(__DIR__ . '/Send.php');

Route::add('/', function () {
  echo 'api';
}, 'get');

Route::add('/sendmail', function () {
  Send::sendMail();
}, 'post');
Route::add('/sendtg', function () {
  Send::sendTG();
}, 'post');

// Route::add('/foo/([0-9]*)/bar', function ($var) {
// });

Route::run('/api');
