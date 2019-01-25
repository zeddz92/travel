exports.validationHandler = (next, res) => result => {
    if (result.isEmpty()) return;

    let errors = {};

    for (const error of result.array()) {
        if (!errors.hasOwnProperty(error.param)) {
            errors[error.param] = [];
        }
        errors[error.param].push(error.msg)
    }

    res.status(422).send({errors: errors});

};
