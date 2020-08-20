// // let a = 221;
// // let b = a-5;
// // a=4 ;
// // console.log(b, a);

// //let = 변경가능 const = 변경불가능 //
const title = document.querySelector("#title"); //id 로 찾기 
// // title.innerHTML = "Hi! From JS"; // html 안의 title 변경
// // title.style.color = "red";  // html 조종 가능 (스타일 변경)
// // document.title = 'I own you' ; // html 조종 가능 (사이트 이름 변경)
// // // console.dir(title);    //html 의 요소들을 볼 수 있다. 

// // //HTML 을 DOM 객체로 바꿀 수 있다. id 를 통해. 
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR ="#7f8c8d";

function handleClick() {      //클릭하면 
    const currentColor = title.style.color; // 해당 색을 알려준다. 
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick) //click가 일어날 때 함수호출(빨간색으로 바뀌는)
}
init();

// function handleOffline() { 
//     console.log("Bye bye");
// }

// function handleOnline() { 
//     console.log("Welcome back");
// }

// window.addEventListener("offline", handleOffline)
// window.addEventListener("online", handleOnline)


// true && ture = true ;    //and 
// false && true = false; 
// true && false = false; 
// false && false = false;

// true || ture = true ;    //or
// false || true = true; 
// true || false = true; 
// false || false = false;



// if (true || "yumin"==="yumin") {
//     console.log('hi')
// } else {
//     console.log('ho')
// // }

// const age = prompt("How lod are you "); 

// if(age >= 18 && age<=21){ 
//     console.log("drink but you should not")
// } else if(age > 21){
//     console.log("you cannot drink")
// } else {
//     console.log("too young")
// }

