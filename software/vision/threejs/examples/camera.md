```js
const fov = 75;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// place the camera at z of 100
camera.position.z = 100;

// 在使用lookAt前，设置镜头的up方向
camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);
```