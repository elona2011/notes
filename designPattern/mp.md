```js
var module = (function () {

    // private
    var privateOne = function () {};
    var privateTwo = function () {};

    // public
    return {
        publicOne: function () {
            privateOne();
        },
        publicTwo: function () {
            privateTwo();
        }
    };

})();
```