# debug

https://medium.com/@dupski/debug-typescript-in-vs-code-without-compiling-using-ts-node-9d1f4f9a94a

用ts-node一定要在tsconfig.json中设置``"module": "commonjs"``

# import json

https://hackernoon.com/import-json-into-typescript-8d465beded79

# d.ts file

```ts
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '@suning/uxcool/es/index' {

}

declare module '@suning/v-pagination' {

}

declare module "*.png" {
  const value: any;
  export = value;
}
```