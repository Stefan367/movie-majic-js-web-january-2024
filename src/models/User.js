const { Schema, model, MongooseError } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true, 
        unique: true,
        match: [/@\w+\.\w+$/, 'Invalid email address'],
        minLength: [10, 'Email should be at least 10 characters long'],
    },
    password: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9]+$/, 'Password should be alphanumeric'],
        minLength: [6, 'Password is too short'],
    },
});

userSchema.pre('save', async function() {
    const hash = await bcrypt.hash(this.password, 12);

    this.password = hash;
});

userSchema.virtual('rePassword')
    .set(function(value) {
        if (value !== this.password) {
            throw new MongooseError('Password mismatch!');
        }
    });

const User = model('User', userSchema);

module.exports = User;