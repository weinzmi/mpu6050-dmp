var mpu = require('./../build/Debug/binding');
setInterval(function () {
  console.log(mpu.getRotation());
  console.log(mpu.getAttitude());
}, 10);
