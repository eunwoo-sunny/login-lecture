"use strict";

const id = document.getElementById('id');
const pw = document.getElementById('pw');
const name = document.getElementById('name');
const confirmPw = document.getElementById('confirm-pw');
const registerBtn = document.getElementById('regiBtn')

registerBtn.addEventListener('click', register);

function register() {  

    if(!id.value) {
        console.log('아이디를 입력하세요');
        return;
    }
    if(pw.value !== confirmPw.value) {
        console.log(pw.value, confirmPw.value)
        console.log('비밀번호가 일치하지 않습니다.')
        return;
    }
    const req = {
        id : id.value,
        name : name.value,
        pw : pw.value 
    }

    
    fetch('/register', {
        method :'POST', // 전달방식은 post 이다.
        headers : {
            "Content-Type" :"application/json" // json형태의 데이터를 전달하겠다.
        },
        body : JSON.stringify(req)
    })
    .then( (res) => res.json())
    .then(res =>{
        if(res.success) {
            location.href='/login'
        } else {
            alert(res.msg)
        }
    })
    .catch(err => {
        console.error(new Error('회원가입 중 에러발생'))
        // fetch가 실행되지않을때 에러발생시킴
    })
}