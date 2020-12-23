# color

```js
const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

// 反光+随机颜色
const material = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, //双面渲染，否则只能看到正面
});
const hue = Math.random();
const saturation = 1;
const luminance = .5;
material.color.setHSL(hue, saturation, luminance);
```