"use strict";

const UserStorage = require('../../models/UserStorage')
const output = {
    home : (req,res) => {
        res.render('home/index')
    },
    login :(req, res) => {
        res.render('home/login')
    } 
}


const process = {
    login : (req,res) => {
       const id = req.body.id;
       const pw = req.body.pw; 
 
    const users = UserStorage.getUsers('id','pw') 
       const isValid = users.id.includes(id);
       const response = {}
       if(isValid) {
        const idx = users.id.indexOf(id);
        const isValidPw = users.pw[idx] === pw;
       
        if(isValidPw) {
            response.success = true
            return res.json(response)
        }
       }

       response.success = false;
       response.msg = 'Login failed'
       return res.json(response)
    }

    

}
 
module.exports = { output, process}