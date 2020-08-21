const title = document.querySelector(".wrapper");

function handleClick() { 
    title.style.backgroundColor = "#" + parseInt(Math.random()* 0xFFFFFF).toString(16)
}

function init() {
    title.addEventListener("click", handleClick)
}
init();
