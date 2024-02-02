const express = require('express');
const path = require('path');

function configExpress(app) {
    app.use(express.static(path.resolve('src/public')));
    app.use(express.urlencoded({ extended: false })); // urlencoded - ако има подадени данни от клиента тази функция ще ги парсне за нас автоматично

    return app;
}

module.exports = configExpress; 