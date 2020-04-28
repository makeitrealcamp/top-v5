function doSomething(cb) {
  cb();
}

function callback() {
  console.log('hello world');
}

doSomething(callback);
