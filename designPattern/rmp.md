# Revealing Module Pattern

```js
var module = (function () {

    // private
    var privateOne = function () {};
    var privateTwo = function () {};

    // public
    return {
        publicOne: privateOne,
        publicTwo: privateTwo
    };

})();
```