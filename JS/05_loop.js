/* 
    for문 : for(초기값 변수; 조건식; 증감식)
    조건식이 참이라면 코드블록을 실행하고 증감식을 실행한다. => n회 반복
*/

for (var i = 1; i <= 5; ++i) {
  console.log(`${i}번째 실행`);
  for (var j = 0; j < 3; j++) {
    console.log(`j : ${j}번재 실행`);
  }
}

// 구구단 출력해보기 ex)2x2 =4

for (var i = 2; i <= 9; ++i) {
  console.log(i + "단 시작");
  for (var j = 1; j <= 9; j++) console.log(`${i}*${j}=${i * j}`);
}

/* 
    while : () 안의 조건식이 true라면 반복 실행 => false 일 때까지 실행. 
    반복 횟수가 불명확할 때 사용한다. => 사용자의 동작에 따라 반복문을 멈춘다. 
    while 문을 멈추는 방법 2가지
    1. 밖에 변수에 true를 할당한 후 특정 조건에서 false 변경.
    2. 특정 조건에서 break를 통해서 반복문 탈출. 
*/
console.log("--------------------------------");

//var isTrue = true;
var i = 0;
while (true) {
  var value = prompt("숫자를 입력해주세요");
  if (isNaN(parseInt(value))) break; //브레이크로 멈출수 있다.
}

// 사용자가 숫자를 입력할 때까지 반복 한다.
// 숫자가 아닌 문자를 넣으면 반복해서 입력창을 출력.
// 숫자를 넣으면 반복문을 끝낸다.
