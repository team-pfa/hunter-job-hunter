const Cards = require('../db/cardModel');

const cardController = {};

cardController.addCard = async (req, res, next) => {
    const result = await Cards.createCard(req);
    res.locals.result = result;
    next();
};

cardController.updateCard = async (req, res, next) => {
    const result = await Cards.updateCard(req);
    res.locals.result = result;
    return next();
};

cardController.deleteCard = async (req, res, next) => {
    const result = await Cards.deleteCard(req);
    res.locals.result = result;
    return next();
};

//should return an array of results
cardController.getCards = async (req, res, next) => {
    const result = await Cards.getCards(req);
    res.locals.result = JSON.stringify(result);
    next();
};

module.exports = cardController;
