```js
import Vue from 'vue';
import StoryRouter from 'storybook-vue-router';

export default {
    title: 'etcPrivate',
    component: etcPrivate,
    decorators: [
        StoryRouter(),
        (story, context) => {
            console.log(context.parameters)
            const plugin = {
                install(Vue) {
                    Vue.prototype.$http = {
                        post() {
                            return {
                                then(cb){
                                    cb({
                                        data:{
                                            resultObj:{
                                                productName:'aa'
                                            }
                                        }
                                    })
                                    return {
                                        then(){}
                                    }
                                }
                            }
                        }
                    }
                }
            }
            // debugger
            Vue.use(plugin)
            const WrappedComponent = story();
            return Vue.extend({
                components: { WrappedComponent },
                template: '<wrapped-component/>',
            })
        }
    ],
};
```