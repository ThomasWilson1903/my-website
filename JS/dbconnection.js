const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "cfif31.ru",
  user: "ISPr22-33_BirukovAA",
  database: "ISPr22-33_BirukovAA_trk1",
  password: "ISPr22-33_BirukovAA"
});
// тестирование подключения
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });
 // закрытие подключения
 connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});