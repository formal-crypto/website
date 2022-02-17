<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

require('Route.php');
require('Send.php');

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
