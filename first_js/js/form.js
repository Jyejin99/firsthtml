let getInput = document.querySelector("Input"); //document.querySelector() : 태그나 아이디 등을 받아올 수 있음
function handleInput(event){
    event.preventDefault();
    console.log(getInput.value);
    let box = document.createElement('li');  //값을 입력할 때마다 li태그 생성
    let text = document.createTextNode(getInput.value);
    box.appendChild(text);
    document.querySelector(".result ul").appendChild(box);  //result 클래스 안에 있는 ul태그
    getInput.value = "";    //입력하면 빈칸으로 해줌
}
document.querySelector("form").addEventListener("submit", handleInput);