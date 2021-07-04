npm install --save-dev storybook-vue-router

```js
import StoryRouter from 'storybook-vue-router';

export default {
    title: 'etcPrivate',
    component: etcPrivate,
    decorators: [
        StoryRouter()
    ],
};
```