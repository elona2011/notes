# camera

https://threejsfundamentals.org/threejs/lessons/threejs-cameras.html

```js
const fov = 45;
const aspect = 2;  // the canvas default
const near = 5;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(20,0, 0);
camera.rotation.set( 0, Math.PI/2, 0)
```