<?php 

// Importo come stringa il file json;
$json_string = file_get_contents('todo.json');

// converto la stringa in file PHP
$list = json_decode($json_string);


header('Content-Type: application/json');


echo json_encode($list);
