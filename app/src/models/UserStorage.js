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
}

module.exports = UserStorage;