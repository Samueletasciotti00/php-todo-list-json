<?php 

// Importo come stringa il file json;
$json_string = file_get_contents('todo.json');

// converto la stringa in file PHP
$store = json_decode($json_string);

if(isset($_POST['itemLista'])){
    $itemLista = $_POST['itemLista'];

    // Aggiungere il task nello store
    $store[] = ['text' => $itemLista];
    // Sovrascrittura del json per la lista aggiornata
    file_put_contents('todo.json', json_encode($store));
}



// Soecifico il tipo di formato inviato
header('Content-Type: application/json');

// Debug
echo json_encode($store);
