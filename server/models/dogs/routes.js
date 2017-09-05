const Dog = require('./model');
const Builder = require('./builder');

module.exports = {
  test: function test(req, res) {
    const dog = new Builder();
    dog.buildRandomDog();
    res.json(dog);
  },
};
