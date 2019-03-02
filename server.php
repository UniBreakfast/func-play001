<?php

function request() {
  foreach (func_get_args() as $arg) $values[] = $_REQUEST[$arg];
  return $values;
}
list($login, $pass) = request('login','pass');

switch ($_REQUEST['task']) {
  case 'signup': {
    list ($login, $mail, $pass) = request('login', 'mail', 'pass');
  }
}


    sleep(1);

echo 'response received';

?>