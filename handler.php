<?php

$link = mysqli_connect('127.0.0.1','root','','events');
if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}
$arrayEvents = array();
$result = mysqli_query($link,"SELECT * FROM events");
    if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {      
            array_push(
            $arrayEvents, 
            [
                'id' => $row["id"], 
                'district' => $row["district"],
                'title' => $row["title"],
                'content' => $row["content"],
                'date' => $row["date"],
                'time' => $row["time"],
                'addres' => $row["addres"],    
                'price' => $row["price"],             
                'img' => $row["img"],
                'Городские события' => $row["Городские события"],
                'Отдых и развлечения' => $row["Отдых и развлечения"],
                'Спорт' => $row["Спорт"],
                'Бизнес' => $row["Бизнес"]
                
            ]);
        }
    } 
    $fp = fopen('base.json', 'a');    
    fwrite($fp, json_encode($arrayEvents));

echo json_encode($arrayEvents);
?>

