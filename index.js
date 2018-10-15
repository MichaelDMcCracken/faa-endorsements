var Endorsements = require('./endorsements');

module.exports = {
  Endorsements: Endorsements,
  List: Endorsements.map(function (el) {
    return el.data.title;
  })
};
