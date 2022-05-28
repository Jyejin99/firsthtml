let age = prompt("나이를 입력해 주세요.");   // prompt : 선택창

if(isNaN(parseInt(age))){
    alert('숫자를 입력해 주세요.');
    location.reload();
}
else{
    let birth = confirm("생일이 지났나요?");
    //console.log(birth)
    //document.body.innerHTML = "현재 나이 : " + age;
    if(birth){
        document.body.innerHTML = "<h1>현재나이 :"+age+"</h1><h1>만 나이 :" +(age-1)+"</h1>";
    }else{
        document.body.innerHTML = "<h1>현재나이 :"+age+"</h1><h1>만 나이 :" +(age-2)+"</h1>";
    }
}