/*
 연산자 : 산술, 할당, 비교 등을 통해서 새로운 값을 생성. 
 피연산자 : 연산에 사용되는 값.
*/

var num = 10 + 30; // 10,30 그리고 결과값인 40 모두 연산에 사용되는 값으로 피연산자이다.

//산술 연산자 : 피연산자에 산술을 통해서 새로운 값을 생성한다.

console.log(6 + 10);
console.log(5 - 1);
console.log(200 * 20);
console.log(20 / 3);
console.log(20 % 3); // 값의 나머지가 도출된다.
console.log(4 - 2 * 4); // 사칙연산 적용

/*
단항 산술 연산자 : 1개의 피연산자에 산술을 적용하여 새로운 값 생성.
++ : 피연산자의 값을 1 증가.
-- : 피연산자의 값을 1 감소. 
-  : 양수를 음수로, 음수를 양수로 만든다. 
*/

var num02 = 5;
console.log(++num02); //피연산자의 값 자체를 증가시켜서 앞으로도 계속 5 + 1 = 6 으로 평가된다.
console.log(num02); //전위연산자 연산의 가장 첫번째 계산된다. 객체의 앞에 붙어있음 ex)++num02
console.log(num02--); //후위연산자 연산의 가장 마지막에 계산된다. 객체의 뒤에 붙어있음. 값은 도출되나 그 이후값부터 -1됨. ex)num02--
console.log(num02); // 후위 연산자 영향으로 5가 도출됨.

var num03 = 10;
var num04 = 1 - num03++ * 2;

console.log(num04, num03);

/* 
 할당 연산자 : 변수에 값을 할당하는 연산자. 
*/

var score = 90;
// 우항의 값을 좌항에 산술하여 할당.

score += 10; // score + 10;
score *= 2; //
score *= score; // 제곱의 표현.

console.log(score);

/*
  비교 연산자(==) : 좌항과 우항의 값이 같은지 비교하여 true(=1) 혹은 false(=0) 값을 반환. 
  동등 연산자(===) : 데이터형까지 비교를 한다.
*/

console.log(score == "40000");
console.log(score === "40000");
console.log(false == "0");

console.log(true + 1); // 이상한 연산도 가능;;

// 불일치 연산자와 부동등 연산자.

console.log(score != 20000); // 일치하지 않으면 true 일치하면 false. 같지 않기 때문에 참.으로 뜬다.

/*
  논리 연산자 : 좌항과 우향의 논리값을 조합해서 새로운 논리값을 반환.
  || (or) : a or b 중에 하나라도 true 이면 true, 둘다 false 일때만 false;
  &&(and) : a and b 중에 하나라도 false면 false, 둘다 true 일때만 true
  !(not)  : 부정 => true 라면 false로, false라면 true를 출력.
  */

var isTrue = true;
console.log(true || false); // or 하나의 값이 true 이기 때문에 true
console.log(false || false); // or 둘다 false이기 때문에 false
console.log(false && false); // and 둘다 false 이기 때문에 false
console.log(!false); // false의 반전값 true
console.log(!(false && false)); // false and false 의 반전값 ture가 출력.
console.log(2 > 1 && 1 < 10); //

/*
   연결 연산자(문자열) : 좌항과 우항의 문자열을 연결 => 템플릿 리터럴 사용하는 것이 가독성이 좋다. 
*/

var str = "안녕하세요" + "윤도상입니다.";
console.log(str);

var name = "윤도상";
var age = 33;
var address = "서울";

// var str =
//   "안녕하세요" +
//   " 저는 " +
//   address +
//   "에 사는 " +
//   age +
//   "세 " +
//   name +
//   "입니다";
// console.log(str);

var greeting =
  "안녕하세요 저는 " + address + "에 사는 " + age + "세 " + name + "입니다.";
console.log(greeting);

// 템플릿 리터럴 : ``안의 문자열에 ${}을 이용해 변수에 있는 값을 문자열에 포함시킨다.
var greeting02 = `안녕하세요 저는 ${address}에 사는 ${age}세 ${name}입니다.`;
console.log(greeting02);

// 현재 연도와 내 생년도 year, birthyear 변수에 담에서 나이 구한 뒤 age 변수에 담기.
// 템플릿 리터럴로 소개하는 문장 console 창에 출력하기.

var birth = 1990;
var now = 2022;
var age2 = now - birth + 1;

var greeting03 = `안녕하세요 저는 서울에 사는 ${age2}세 윤도상입니다.`;
console.log(greeting03);
