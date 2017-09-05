const Dog = require('./model');
const Builder = require('./builder');

module.exports = {
  absoluteRandom: function absoluteRandom(req, res) {
    const dog = new Builder();
    dog.buildRandomDog();
    res.json(dog);
  },
};
