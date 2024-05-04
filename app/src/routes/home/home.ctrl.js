"use strict";


const output = {
    home : (req,res) => {
        res.render('home/index')
    },
    login :(req, res) => {
        res.render('home/login')
    }
    
}

const users = {
    id : ['ejey','henry','sunny','shushu'],
    pw : ['111','222','333','444']
}

const process = {
    login : (req,res) => {
       const id = req.body.id;
       const pw = req.body.pw; 

       const isValid = users.id.includes(id);
       if(isValid) {
        const idx = users.id.indexOf(id);
        const isValidPw = users.pw[idx] === pw;
       
        if(isValidPw) {
            return res.json({
                success : true
            })
        }
       }

       return res.json({
        success:false,
        msg : 'Login failed'
       })
    }

    

}
 
module.exports = { output, process}