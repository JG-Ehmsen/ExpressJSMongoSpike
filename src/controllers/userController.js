User = require('../models/userModel');// Handle index actions
exports.getall = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: users
        });
    });
};

exports.new = function (req, res) {
    let user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    user.email = req.body.email;
    user.save(function (err) {
        // if (err)
        //     res.json(err);

        res.json({
            message: 'New contact created!',
            data: user
    });
});
};

// Handle view contact info
exports.get = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user
        });
    });
};// Handle update contact info
exports.update = function (req, res) {User.findById(req.params.user_id, function (err, user) {
    if (err)
        res.send(err);
    user.name = req.body.name ? req.body.name : user.name;
    user.email = req.body.email ? req.body.email : user.email;
    // save the contact and check for errors
    user.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'Contact Info updated',
            data: user
        });
    });
});
};// Handle delete contact
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};
