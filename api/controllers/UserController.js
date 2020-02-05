/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    /**
     * Function to create user
     * @param {*} req 
     * @param {*} res 
     */
    createUser: function (req, res) {
        var firstname = req.param('firstname');
        var lastname = req.param('lastname');
        var gender = req.param('gender');
        var data = {
            firstname: firstname,
            lastname: lastname,
            gender: gender
        };
        User.Create(data).exec(function(err,newUser){

        })

        res.status(200).json({"success":true});

    },
    register: function (req, res) {

    }


};

