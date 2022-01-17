
var width1 = document.documentElement.clientWidth;
var tallage = 90;
var result = width1 / 100 * tallage; //вычисление процентов

var vse_divi = document.getElementsByClassName('block_header_small');

for (var i = 0; i < vse_divi.length; i++) {
  vse_divi[i].setAttribute("style" , "width:" + result + "px;display: inline-block;");
}

// function Login() {
//   var formData = new FormData();
//   formData.append('name', 'Tom');
//   formData.append('age', 23);
//
//   var request = new XMLHttpRequest();
//   function reqReadyStateChange() {
//       if (request.readyState == 4 && request.status == 200)
//           document.getElementById("output").innerHTML=request.responseText;
//   }
//
//   request.open("POST", "http://localhost:8080/display.php");
//   request.onreadystatechange = reqReadyStateChange;
//   request.send(formData);
// }



// var exampleSocket = new WebSocket("ws://api.anilibria.tv/v2/ws/", "protocolOne");
// exampleSocket.send('{"subscribe": *}');
// var msg = {
//   subscribe: "*"
// };
// console.log(JSON.stringify(msg));
//
// // Пример создания объекта
// let ws = new WebSocket("ws://api.anilibria.tv/v2/ws/");
// ws.onmessage = function(event) {
//     console.log('Получены данные ', event.data);
// };
// ws.onopen = function() {
//     console.log('Соединение установлено.');
//     ws.send(JSON.stringify(msg));
// };
// ws.onclose = function(event) {
//     if (event.wasClean) {
//         console.log('Соединение закрыто чисто');
//     } else {
//        console.log('Обрыв соединения');  // при остановке сервера
//     }
//     console.log('Код: '+ event.code +' причина: '+event.reason);
// };
// ws.onerror = function(error) {
//   console.log("Ошибка " + error.message);
// };
