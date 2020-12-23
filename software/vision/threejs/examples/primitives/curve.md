```js
const curve = new THREE.SplineCurve([
    new THREE.Vector2(-10, 0),
    new THREE.Vector2(-5, 5),
    new THREE.Vector2(0, 0),
    new THREE.Vector2(-10, 0),
]);
const points = curve.getPoints(50);
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
const splineObject = new THREE.Line(geometry, material);
splineObject.rotation.x = -Math.PI * .5;
splineObject.position.y = 0.05;
scene.add(splineObject);
```