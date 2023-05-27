const User = require('../models/user');

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch(error) {
        console.log('Get user is failing', JSON.stringify(error));
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.postUser = async (req, res, next) => {
    try{
        const name = req.body.name;
        const email = req.body.email;
        const phoneNo = req.body.phone;
        console.log(name, email, phoneNo);
        const user = await User.create({name: name, email: email, phoneNo: phoneNo});
        res.status(201).json(user);
    } catch(error) {
        res.status(500).json({
            error: error
        })
    }
}

exports.deleteUser = async (req, res, next) => {
    try{
        const id = req.params.id;
        if(id === undefined){
            console.log('ID is missing');
            res.status(400).json({
                error: 'Bad request'
            })
        }else{
            const user = await User.destroy({where: {id: id}});
            console.log('User was deleted successfully');
            res.status(201).json(user);
        }
        //res.redirect('/');
    }catch(err){
        res.status(500).json({
            error: err
        })
    }
}

// exports.updateUser = async (req, res, next) => {
//     const edit = req.query.edit;
//     if(!edit){
//         res.redirect('/users');
//     }else {
//         try{
//             const id = req.params.id;
//             if(id === undefined){
//                 console.log('ID is missing');
//                 res.status(400).json({
//                     error: 'Bad request'
//                 })
//             } else{

//             }
//     }
// }