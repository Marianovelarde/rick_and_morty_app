const data = require("../utils/users")


const login = (req,res) => {
    
    const {userName, password} = req.query

    const found = data.find(user => user.userName === userName && user.password === password)
    const access = found ? true : false
    res.status(200).json({access})

}

module.exports =login