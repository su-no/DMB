let target = document.querySelector('#dynamic');

function randomString() {
  let stringArr = [
    ' 디지털 노마드를 ',
    ' 돈 많은 백수를 ',
    ' 카카오를 ',
    ' C.E.O를 ',
    ' 일취월장을 ',
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split('');
  return selectStringArr;
}
function resetTyping() {
  target.textContent = '';
  dynamic(randomString());
}

function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 120);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());
