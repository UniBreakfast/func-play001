<?php

require "validate.php";

$check = array('not'=>'/^abc$/', 'err'=>'should be an abc');
echo validate('abc', $check).'<br>';

$checks = array(
  array('not'=>'/^\w+$/', 'err'=>'only alphanumeric'),
  array('is'=>'/[A-Z]/', 'err'=>'lowercase only'),
);
echo validate('asB', $checks).'<br>';

function arr_print($arr) {
  if ($arr)
  echo "[".(gettype($arr[0])=='string'?'"'.$arr[0].'"':$arr[0]).': "'.$arr[1].'"]<br>';
  else echo 'ok<br>';
}

arr_print(validate(array('a s','cd'), $checks));


$checks = array(
  array('sub'=>2, 'not'=>'/^\w+$/', 'err'=>'only alphanumeric'),
  array('sub'=>1, 'is'=>'/[A-Z]/', 'err'=>'lowercase only'),
);
arr_print(validate(array('a s','cdE'), $checks));

$checks = array(
  array('sub'=>'login', 'not'=>'/^\w+$/', 'err'=>'only alphanumeric'),
  array('sub'=>'pass', 'is'=>'/[A-Z]/', 'err'=>'lowercase only'),
);
arr_print(validate(array('login'=>'as','pass'=>'cd'), $checks));

$checks = array(
  array('not'=>'/^\w+$/', 'err'=>'only alphanumeric'),
  array('is'=>'/[A-Z]/', 'err'=>'lowercase only'),
);
arr_print(validate(array('login'=>'as','pass'=>'c d'), $checks));

?>