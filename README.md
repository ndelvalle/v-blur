# v-blur

[ ![Codeship Status for ndelvalle/v-blur](https://app.codeship.com/projects/3a56b780-4639-0135-c530-069e5644f905/status?branch=master)](https://app.codeship.com/projects/231348)
[![Coverage Status](https://coveralls.io/repos/github/ndelvalle/v-blur/badge.svg?branch=master)](https://coveralls.io/github/ndelvalle/v-blur?branch=master)
[![dependencies Status](https://david-dm.org/ndelvalle/v-blur/status.svg)](https://david-dm.org/ndelvalle/v-blur)
[![devDependencies Status](https://david-dm.org/ndelvalle/v-blur/dev-status.svg)](https://david-dm.org/ndelvalle/v-blur?type=dev)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4b151e093b7e44ffbb660a84381d84ed)](https://www.codacy.com/app/ndelvalle/v-blur?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ndelvalle/v-blur&amp;utm_campaign=Badge_Grade)

Vue directive to blur an element dynamically. Useful to partially hide elements, use it with a spinner when content is not ready among other things.

## Install

```bash
$ npm install --save v-blur
```

```bash
$ yarn add v-blur
```
## Binding value

The binding value can be a Boolean or an Object. If a Boolean is provided, the directive uses default values for [opacity](https://www.w3schools.com/cssref/css3_pr_opacity.asp), [filter](https://www.w3schools.com/jsref/prop_style_filter.asp) and [transition](https://www.w3schools.com/jsref/prop_style_transition.asp). To use a custom configuration, an object with these attributes plus `isBlurred` (To determine when to apply these styles) can be provided.

### Binding object attributes

| option     | default          | type   |
| -----------|:----------------:| ------:|
| isBlurred  | false            | boolean|
| opacity    | 0.5              | number |
| filter     | 'blur(1.5px)'    | string |
| transition | 'all .2s linear' | string |

## Use

```js
import Vue from 'vue'
import vBlur from 'v-blur'

Vue.use(vBlur)

// Alternatively an options object can be used to set defaults. All of these
// options are not required, example:
// Vue.use(vBlur, {
//   opacity: 0.2,
//   filter: 'blur(1.2px)',
//   transition: 'all .3s linear'
// })

```

```js
<script>
  export default {
      data () {
        return {
          // Example 1:
          // Activate and deactivate blur directive using defaults values
          // provided in the Vue.use instantiation or by the library.
          isBlurred: true,

          // Example 2:
          // Activate and deactivate blur directive providing a local
          // configuration object.
          blurConfig: {
            isBlurred: false,
            opacity: 0.3,
            filter: 'blur(1.2px)',
            transition: 'all .3s linear'
          }
        }
      }
    }
  };
</script>

<template>
  <!-- Example 1 using just a boolean (Uses default values) -->
  <div v-blur="isBlurred"></div>

  <!-- Example 2 using an object (Uses config values) -->
  <div v-blur="blurConfig"></div>
</template>
```

## Example
[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/823o069zoj?module=%2Fsrc%2Fcomponents%2FHelloWorld.vue)
![v-blur](https://raw.githubusercontent.com/ndelvalle/v-blur/master/v-blur-image.png)

## License
[MIT License](https://github.com/ndelvalle/v-blur/blob/master/LICENSE)

## Style guide
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
