"use strict";
const fs = require('fs').promises


class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data) 
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);  
        const userInfo = usersKeys.reduce( (newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser
        }, {}) 
        return userInfo;
    }

    
    
    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce( (newUser, field) => {
            if(users.hasOwnProperty(field)) {
                newUser[field] = users[field]
            }
            return newUser;
        }, {})
        return newUsers;
    }

    static getUserInfo(id) { 
       return  fs.readFile('./src/databases/users.json')
       .then(data => {
           return this.#getUserInfo(data, id);
       }) 
       .catch(console.error)
       // .catch(err => console.error(err)); -> 파라미터로 받아온값을 실행할 함수에 리턴할때는 위와 같이 생략가능
        
    }

    

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw); 
        return { success : true}
    }
}

module.exports = UserStorage;