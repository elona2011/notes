```js
const cube = new THREE.Mesh(geometry, material);

cube.scale.set(5,5,5) //放大
```

# position,rotation

物体rotate会改变自身内部坐标系，但对position无影响，position依赖外部坐标系

```js
line.rotation.x = -Math.PI * .5
line.position.y = 1
```

