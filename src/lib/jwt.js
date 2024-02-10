const util = require('util');
const jwt = require('jsonwebtoken');

function sign(payload, secretOrPrivateKey, options = {}) {
    const promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secretOrPrivateKey, options, (err, token) => {
            if (err) {
                return reject(err);
            }

            resolve(token);
        })
    });

    return promise;
}

const verify = util.promisify(jwt.verify); // обръщаме callback базирана функция в promise базирана функция с util.promisify

module.exports = {
    sign,
    verify,
};