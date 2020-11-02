```js
function clone(o){
    if(o==global)return 
    if(Array.isArray(o)){
        let r = []
        for(let i = 0;i<o.length;i++){
            r[i] = clone(o[i])
        }
        return r
    }else if(o==null){
        return null
    }else if(typeof o == 'object'){
        let r = {}
        Object.keys(o).forEach(n=>{
            r[n] = clone(o[n])
        })
        return r
    }else{
        return o
    }
}
```