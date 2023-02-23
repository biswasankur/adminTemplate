const adminmodel = require('../model/admin')

exports.Checkduplicate = (req, res, next) => {
    adminmodel.findOne({
        email: req.body.email
    }).exec((err, email) => {
        if (err) {
            console.log(err);
            return
        }
        if (email) {
            console.log('email alrdy exist');
            return res.redirect('/register')
        }

        const password = req.body.password
        const confirmpassword = req.body.confirmpassword
        if (password !== confirmpassword) {
            return res.redirect('/register')
        }
        next()
    })
}