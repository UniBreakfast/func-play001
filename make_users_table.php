<?php

error_reporting(E_PARSE | E_ERROR);

$user   = $_REQUEST['u'] or exit ('?u=username&p=password&x=prefix');
$pass   = $_REQUEST['p'];
$prefix = $_REQUEST['x'];

$sql = file_get_contents('make_users_table.sql');

if ($prefix!='') $sql = str_replace('play004', $prefix, $sql);
else $prefix = 'play004';

$db = mysqli_connect('localhost', $user, $pass, 'sandbox')
  or exit ('credentials rejected');

mysqli_multi_query($db, $sql) or exit (mysqli_error($db));
echo 'table '.$prefix.'_users created and preconfigured (if it was possible)';
