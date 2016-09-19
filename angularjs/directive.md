# ng-repeat

ngRepeat使用时要注意传入的是数组还是对象，如果是对象，且使用数组的写法，会导致n的排序为对象key的字母顺序。此情况多发生在，错误地将数组转成了对象，且未发现。如数组[1,2,3,4,5,6,7,8,9,10]排序正常，但对象{1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10}的排序将为{1:1,10:10,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9}

```
<li ng-repeat="phone in phones | filter:query">
  {{phone.name}}
  <p>{{phone.snippet}}</p>
</li>
```

# one time binding

1.3之前版本没有one time binding

在id属性上一次性绑定了modalId

```
MetronicApp.directive('productSelectModal', function() {
    return {
        restrict: 'E',
        require: '?ngModel',
        scope: {
            ngModel: '=?',
            modalId: '@'
        },
        templateUrl: 'tpl/productSelectModal.html',
        link: function(scope, elem, attrs, ctrl) {
            elem.find('.modal.fade.bs-modal-lg').attr('id', scope.modalId);
        }
    };
});
```

# recursion directive

http://stackoverflow.com/questions/14430655/recursion-in-angular-directives
