var cars = require('../model/cars.js');

module.exports = {

  index: function(req, res, next) {
    res.status(200).json(cars);
  },
  show: function(req, res, next) {
    var carID = Number(req.params.id);
    res.status(200).json(cars[carID]);
  },
  create: function(req, res, next) {
    cars.push(req.body);
    res.status(200).json(cars);
  },
  update: function(req, res, next) {
    var carID = Number(req.params.id);
    cars[carID] = req.body;
    res.status(200).json(cars);
  },
  destroy: function(req, res, next) {
    var carID = Number(req.params.id);
    var deletedCar = cars.splice(carID, 1)[0];
    res.status(200).json(deletedCar);
  }

}
