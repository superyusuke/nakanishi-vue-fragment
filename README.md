# vue-fragments
## what
a very candide fragment component for Vue.js

もともと公開されていたモジュールの、export 周りのバグを修正しただけのものです。
https://www.npmjs.com/package/vue-fragments

## why
If you arrived here, i think you searched hard and you know why you're here.

For others, fragments are basically _root-less_ components. They come useful in many situations where you don't want to pollute the DOM, or you semantically return many elements at once.

### How
It's impossible to use functional components or slots, since it's all about vDOM and there is a "you should return one root element" limitation… So, I'm using a directive called `v-fragment` which will dump all children of the target node into its parent at the time of insertion. Since directives can manipulate DOM, we can bypass that limitation.

Also, for semantics, I'm adding a `VFragment` component so you can use a meaningful `<v-fragment />` instead of `<div v-fragment />` (but it's literally the same).

### Use
-  download the package `npm i -s @superyusuke/vue-fragment`

From here, you can load a plugin version, or use the component independently.

- Plugin:
    ```
    import { Plugin } from '@superyusuke/vue-fragment'
    Vue.use(Plugin)

    …

    export const MyComponent {
      template: '
      <v-fragment>
        <input type="text" v-model="message">
        <span>{{ message }}</span>
      </v-fragment>
      ',
      data() { return { message: 'hello world }}
    }
    ```

- Component:
    ```
    import { VFragment } from '@superyusuke/vue-fragment'

    export const MyComponent {
      components: { VFragment },
      template: '
      <v-fragment>
        <input type="text" v-model="message">
        <span>{{ message }}</span>
      </v-fragment>
      ',
      data() { return { message: 'hello world }}
    }
    ```
