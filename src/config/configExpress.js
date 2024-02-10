const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

function configExpress(app) {
    app.use(express.static(path.resolve('src/public')));
    app.use(express.urlencoded({ extended: false })); // urlencoded - ако има подадени данни от клиента тази функция ще ги парсне към обект за нас автоматично
    app.use(cookieParser());

    return app;
}

module.exports = configExpress; 