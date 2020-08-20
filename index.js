// let a = 221;
// let b = a-5;
// a=4 ;
// console.log(b, a);

//let = 변경가능 const = 변경불가능 //
const title = document.querySelector("#title"); //id 로 찾기 
title.innerHTML = "Hi! From JS"; // html 안의 title 변경
title.style.color = "red";  // html 조종 가능 (스타일 변경)
document.title = 'I own you' ; // html 조종 가능 (사이트 이름 변경)
// console.dir(title);    //html 의 요소들을 볼 수 있다. 

//HTML 을 DOM 객체로 바꿀 수 있다. id 를 통해. 

