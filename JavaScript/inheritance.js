function Car(velocity) {
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

// function Bus() {}; // {}
//vs
function Bus() { // { velocity: 0 }
  Car.call(this);
}

Bus.prototype = new Car();

Bus.prototype.beep = function() {
  return 'BEEP';
}

// const bus = new Bus(); { velocity: 0 } vs {}
// bus.velocity;
// bus.accelerate();
// bus.beep();
