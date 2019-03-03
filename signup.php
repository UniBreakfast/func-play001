<?php

list ($login, $mail, $pass) = request('login', 'mail', 'pass');
$subj = array('login'=>$login, 'mail'=>$mail, 'pass'=>$pass);
$checks = array(
  array('sub'=>'login', 'is'=>'/\W/',
        'err'=>'should only have latin letters, numbers and underscores'),
  array('sub'=>'login', 'not'=>'/^.{3,16}$/',
        'err'=>'should be 3 to 16 characters long'),
  array('sub'=>'mail', 'not'=>$emailRegExp,
        'err'=>"that doesn't look like a valid e-mail"),
  array('sub'=>'pass', 'not'=>'/./',
        'err'=>'empty password is not allowed')
);
if ($invalid=validate($subj, $checks))
  $response['invalid'] = $invalid;
else $response['ok'] =
  "going to process login: $login, mail: $mail, pass: $pass";


?>