var currentYear = 2022;
var birth = 1998;
var age = currentYear - birth + 1;

/* 
    if : ()안의 조건문이 true 일 때 실행되고. false 인 경우 실행x 
    else if : if문의 조건이 false인 경우 else if의 조건을 확인 후 true 이면 실행.
    else : 모든 조건이 해당하지 않을 때 무조건 실행 => 필수 x 조건 필요x 

    논리 연산자를 통해서 정확한 조건을 작성.
*/

if (age >= 30 && age < 40) {
  console.log("30대 입니다.");
} else if (age >= 20 && age < 30) {
  console.log("30세 미만입니다.");
} else {
  console.log("30대도 20대도 아닙니다.");
}

// address 의 값이 서울, 인천 ,경기라면 수도권에 살고있습니다 출력.
// 그렇지 않은경우 지방에 살고 있습니다를 출력.

var address = "서울";

if (address === "서울" || address === "인천" || address === "경기") {
  console.log("수도권에 살고 있습니다.");
} else {
  console.log("지방에 살고 있습니다.");
}

// 변수의 num의 값이 짝수라면 짝수입니다. 출력
// 홀수라면 홀수입니다 출력
// 짝수의 정의

var num = 5;
if (num % 2 === 0) console.log("짝수입니다.");
else console.log("홀수입니다.");

console.log("-----------------");

/* 
    Switch : ()안의 값을 각 case 값과 비교하여 해당 하는 case를 실행.
    break : 탈출.  break 를 하지 않으면 해당하는 case 이후의 case를 모두 실행. (default 포함)
    default : 기본으로 실행되는 코드. 
*/

var data = "[1, 2, 3]";
switch (typeof data) {
  case "string": {
    console.log("string 타입입니다.");
  }
  case "number": {
    console.log("number 타입 입니다.");
    break; // 입력값이 여기서 걸리면 이후에 case값에 해당되더라도 값은 출력되지 않는다.
  }
  case "boolean": {
    console.log("boolean 타입 입니다.");
  }
  default: {
    console.log("모두 해당하지 않습니다.");
  }
}

/* 
    점수가 90점 이상이면 A 
    89~80 : B
    79~70 : C
    69~60 : D
    그 이외는 F
*/

var score = 80;

switch (parseInt(score / 10)) {
  case 10:
  case 9:
    console.log("A등급 입니다.");
    break;
  case 8:
    console.log("b등급 입니다.");
    break;
  case 7:
    console.log("c등급 입니다.");
    break;
  case 6:
    console.log("d등급 입니다.");
    break;
}
