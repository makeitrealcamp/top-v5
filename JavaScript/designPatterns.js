// Prototype Pattern

// function Person(name, lastname) {
//   this.name = name;
//   this.lastname = lastname;
// }

// Person.prototype.greet = () => {
//   console.log('hello world');
// }

// const person1 = new Person('Simon', 'Hoyos');
// const person2 = new Person('Maria', 'Perez');

// Adapter Pattern
// utils/api.js
// import axios from 'axios';
// import fetch from 'node-fetch';

// class PostsApi {
//   getPosts() {
//     fetch({ method: 'GET' });
//   }
// }

// export default PostApi;

// Other.js
// import PostApi from '../utils/api.js';

// const postApi = new PostApi();
// postApi.getPosts();

// Observer Pattern
// class Observer {
//   notify(message) {
//     console.log(message);
//   }
// }

// class Topic {
//   constructor() {
//     this.observers = [];
//   }

//   subscribe(observer) {
//     this.observer.push(observer);
//   }

//   unsubscribe(observer) {
//     const index = this.observer.indexOf(observer);
//     if (index > -1) {
//       this.observer.splice(index, 1);
//     }
//   }

//   notify(message) {
//     this.observers.forEach(observer => {
//       observer.notify(message);
//     });
//   }
// }

// const topic1 = new Topic();
// const topic2 = new Topic();
// const observer1 = new Observer();
// const observer2 = new Observer();
// const observer3 = new Observer();

// topic1.subscribe(observer1);
// topic1.subscribe(observer2);
// topic1.subscribe(observer3);
// topic2.subscribe(observer1);

// topic1.notify('hola mundo');

// Module Pattern
// IIFE
const module1 = (function(speed) {
  let velocity = speed;

  accelerate(amount) {
    return velocity += amount;
  }

  brake(amount) {
    return velocity -= amount;
  }

  getVelocity() {
    return velocity;
  }

  return {
    accelerate,
    brake,
    getVelocity,
  };
})(0);

module1.getVelocity(); // 0
module1.velocity; // undefined
module1.accelerate(10); // 10
module1.brake(4); // 6
module1.getVelocity() // 6







