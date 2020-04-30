function Car() {
  this.velocity = 0;
}

Car.prototype.accelerate = function(amount) {
  // if(amount) {
  //   this.velocity += amount;
  // } else {
  //   this.velocity += 1;
  // }
  this.velocity += amount || 1;
  return this;
}

Car.prototype.break = function(amount) {
  this.velocity -= amount || 1;
  return this;
}

function Bus() {};

// function Bus() {
//   Car.call(this);
// }

Bus.prototype = new Car();

Bus.prototype.beep = function() {
  return 'BEEP';
}

// const bus = new Bus();
// bus.accelerate();
// bus.beep();
