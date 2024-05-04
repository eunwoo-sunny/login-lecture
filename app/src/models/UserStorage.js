"use strict";

class UserStorage {
    static #users = {
        id : ['ejey','henry','sunny','shushu'],
        pw : ['111','222','333','444'],
        name : ['eunjung','hyunwoo','kisun','yuson']
    }
    
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce( (newUser, field) => {
            if(users.hasOwnProperty(field)) {
                newUser[field] = users[field]
            }
            return newUser;
        }, {})
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // users의 키값들만 가져와서 배열로 만든다. [id,pw,name]
        const userInfo = usersKeys.reduce( (newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser
        }, {})
        return userInfo;
    }
}

module.exports = UserStorage;