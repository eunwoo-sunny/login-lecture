"use strict";
const UserStorage = require('./UserStorage')

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const { id, pw } = UserStorage.getUserInfo(body.id)  
        if(id) {
            if( id === body.id && pw === body.pw) {
                return { success : true}
            }
            return { success : false, msg : 'password is wrong'}
        }

        return {
            success :false, msg :'존재하지않는 아이디이다.'
        }
    }
}


module.exports = User;
