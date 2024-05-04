"use strict";

const id = document.getElementById('id');
const pw = document.getElementById('pw');
const loginBtn = document.getElementById('btnLogin')

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id : id.value,
        pw : pw.value
    }
    
    console.log('req :', req)
    console.log('JSON.req : ', JSON.stringify(req))
    fetch('/login', {
        method :'POST', // 전달방식은 post 이다.
        headers : {
            "Content-Type" :"application/json" // json형태의 데이터를 전달하겠다.
        },
        body : JSON.stringify(req)
    })
}