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

    static #getUsers(data,isAll, fields) {
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce( (newUser, field) => {
            if(users.hasOwnProperty(field)) {
                newUser[field] = users[field]
            }
            return newUser;
        }, {})
        return newUsers;
    }
    
    
    static getUsers(isAll, ...fields) { 

        return fs.readFile('./src/databases/users.json')
        .then(data => {
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error)
       
    }

    static getUserInfo(id) { 
       return  fs.readFile('./src/databases/users.json')
       .then(data => {
           return this.#getUserInfo(data, id);
       }) 
       .catch(console.error)
       // .catch(err => console.error(err)); -> 파라미터로 받아온값을 실행할 함수에 리턴할때는 위와 같이 생략가능
        
    }

    

    static async save(userInfo) {
         const users = await this.getUsers(true);
         if(users.id.includes(userInfo.id)) {
            throw '이미 존재하는 아이디입니다.'
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        fs.writeFile('./src/databases/users.json', JSON.stringify(users))
        return { success : true}

    }
}

module.exports = UserStorage;