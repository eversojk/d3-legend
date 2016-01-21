module.exports = function(d3) {
  return {
      color: require('./src/color')(d3),
      size: require('./src/size')(d3),
      symbol: require('./src/symbol')(d3)
  };
};
