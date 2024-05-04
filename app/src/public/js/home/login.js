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

    console.log('req', req)
}