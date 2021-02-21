function cal(D, S) {
    debugger
    let map = {}, maxLen = 0
    for (let w of D) {
        map[w] = 1
        maxLen = Math.max(maxLen, w.length)
    }
    let p = 0
    while(p<S.length){
        for(let i=1;i<=maxLen;i++){
            let w = S.slice(p,p+i)
            if(map[w]){
                
            }
        }
    }

}