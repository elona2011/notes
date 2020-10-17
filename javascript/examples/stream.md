```js
fs.writeFileSync('v1log', '')
var stream = fs.createWriteStream("v1log", { flags: 'a' });
function appendFile(txt) {
    stream.write(txt + "\n");
}
```