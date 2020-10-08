```js
let controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.minDistance = 1
controls.maxDistance = 1500
function render(time) {
    controls.update();

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
requestAnimationFrame(render);
```