## priority

When there are multiple directives defined on a single DOM element, sometimes it is necessary to specify the order in which the directives are applied. The priority is used to sort the directives before their compile functions get called. Priority is defined as a number. Directives with greater numerical priority are compiled first. Pre-link functions are also run in priority order, but post-link functions are run in reverse order. The order of directives with the same priority is undefined. The default priority is 0.

directive中的link是post-link

## transclude

1.2和１。３版本的区别：将transclude scope作为directive scope的子scope，即$parent的引用将不同
http://stackoverflow.com/questions/16653004/confused-about-angularjs-transcluded-and-isolate-scopes-bindings
 the transcluded html is a new child scope of the current scope on that DOM.

http://teropa.info/blog/2015/06/09/transclusion.html
