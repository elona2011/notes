x-red y-green z-blue

```js
const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
node.add(axes);
```