function add(a, b){
  return a + b;
}

module.exports = {
  x: 3,
  sumTimesX: function(a, b) {
    console.log(add(a, b) * this.x)
  }
}