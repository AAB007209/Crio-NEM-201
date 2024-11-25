const { userSearchSchema } = require("../validations/userSearchValidation")

const queryValidator = (req, res, next) => {
    const { gender, age } = req.query;
    const { error } = userSearchSchema.validate({ gender, age });

    if (error) {
        return res.status(400).send({ message: error.details[0].message })
    }

    next();
}

module.exports = queryValidator;