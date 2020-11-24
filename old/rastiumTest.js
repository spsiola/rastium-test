var testDATA;
/*
function getFile(fileName) {
    var request = new XMLHttpRequest();
    request.open('GET', fileName);
    request.onloadend = function () {
        parse(request.responseText);
    }
    request.send();
}
getFile('rastiumTest.json'); //путь к файлу


function parse(obj) {
    testDATA = JSON.parse(obj);
    console.log(testDATA);
}
*/
//====
async function loadTest() {
  const response = await fetch(testJSONURL);
  testDATA = await response.json();
  return testDATA;
}
function showRastiumTest() {
  document.getElementById('rastiumTest').innerHTML =
    '<h1>Загружаем тест-квест...</h1>';
  var result =
    "<h1 id='testHead' style='padding: 15px; text-align: center;'>Загружаем тест-квест</h1><p id='testDescr'>Круто, да?</p>";
  loadTest().then((testDATA) => {
    console.log(testDATA);
    result = `<h1 id='testHead' style='padding: 15px; text-align: center;'>${testDATA['testName']}</h1><p id='testDescr' style='padding: 15px; text-align: center;'>Круто, да?</p>`;
    result += "<div id='testBody'></div>";
    result +=
      "<div id='buttons'><button onclick='nextQuestion(0); '>Первый вопрос</button></div>";
    document.getElementById('rastiumTest').innerHTML = result;
  });
  //console.log(testDATA);
  return result;
}
function questionAnswer(ansNum, isCorrect) {
  let htmlAnswerReaction =
    '<video width="320" height="240" autoplay><source src="movie.mp4" type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>';
  return null;
}
function nextQuestion(answNum) {
  console.log('Ой! кнопочку нажали!');
  document.getElementById('testHead').innerHTML =
    testDATA['questions'][answNum]['Text'];
  document.getElementById('testDescr').innerHTML =
    '<video width="320" height="240" controls><source src = "' +
    URLPrefix +
    testDATA['questions'][answNum]['VideoLink'] +
    '" type = "video/mp4" >Ой! Ваш браузер устарел и не поддерживает тэг <video>.</video>';
  let answers = "<table style='width: 100%;'><tr>";
  for (let i = 0; i < testDATA['questions'][answNum]['Answers'].length; i++) {
    answers +=
      "<td style='padding: 15px; text-align: center;'>" +
      testDATA['questions'][answNum]['Answers'][i]['Answer'] +
      '<br/>' +
      (testDATA['questions'][answNum]['Answers'][i]['AnswerPicture'] == ''
        ? ''
        : "<img src='" +
          URLPrefix +
          testDATA['questions'][answNum]['Answers'][i]['AnswerPicture'] +
          "'>") +
      '<br/>' +
      (testDATA['questions'][answNum]['Answers'][i]['AnswerVideoLink'] == ''
        ? ''
        : '<video width="320" height="240" controls><source src = "' +
          URLPrefix +
          testDATA['questions'][answNum]['Answers'][i]['AnswerVideoLink'] +
          '" type = "video/mp4" >Ой! Ваш браузер устарел и не поддерживает тэг video.</video>') +
      "<button onclick='questionAnswer(" +
      answNum +
      ',' +
      testDATA['questions'][answNum]['Answers'][i]['isCorrect'] +
      "); '>" +
      'Этот ответ!' +
      '</button>' +
      '</td>';
  }
  answers += '</tr></table>';
  document.getElementById('testBody').innerHTML = answers;
  document.getElementById('buttons').innerHTML =
    "<button onclick='nextQuestion(" +
    (answNum == 1 ? 0 : 1) +
    "); '> Следующий вопрос</button>";
  return null;
}
