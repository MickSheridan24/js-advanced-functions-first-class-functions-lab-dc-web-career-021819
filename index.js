// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function(drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(mult) {
  return function(fare) {
    return fare * mult;
  };
};

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
};

const fetchSpecifiedDrivers = function(drivers, cb) {
  return cb(drivers);
};
