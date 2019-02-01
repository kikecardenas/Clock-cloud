function CurrentTime(date) {
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  return [hr, min, sec];
}

function Digit(value) {
  var newValue = value > 9 ? value : "0" + String(value);
  return newValue;
}


function formatHr(hrActual) {
  var tiempo = CurrentTime(hrActual);
  var formato = tiempo[2] % 2 == 0 ? Digit(tiempo[0]) + ":" + Digit(tiempo[1]) :
    Digit(tiempo[0]) + " " + Digit(tiempo[1]);
  return formato;
}


function FormatLocal() {
  var date = new Date();
  local.textContent =formatHr(date);
}

function FormatServer(serverDate){
  server.textContent = formatHr(serverDate);
}

function getDataRestApi() {
  fetch('http://localhost:8080/')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var date = new Date(myJson);
    FormatServer(date);
  });
}
function showTime(){
  FormatLocal();
  getDataRestApi();
}

showTime();
setInterval(showTime, 1000);
