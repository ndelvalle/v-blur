# v-blur

[![Codeship Status](https://img.shields.io/codeship/3a56b780-4639-0135-c530-069e5644f905/master.svg)](https://app.codeship.com/projects/213256)
[![Coverage Status](https://coveralls.io/repos/github/ndelvalle/v-blur/badge.svg?branch=master)](https://coveralls.io/github/ndelvalle/v-blur?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4b151e093b7e44ffbb660a84381d84ed)](https://www.codacy.com/app/ndelvalle/v-blur?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ndelvalle/v-blur&amp;utm_campaign=Badge_Grade)
[![bitHound Overall Score](https://www.bithound.io/github/ndelvalle/v-blur/badges/score.svg)](https://www.bithound.io/github/ndelvalle/v-blur)
[![bitHound Dev Dependencies](https://www.bithound.io/github/ndelvalle/v-blur/badges/devDependencies.svg)](https://www.bithound.io/github/ndelvalle/v-blur/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/ndelvalle/v-blur/badges/code.svg)](https://www.bithound.io/github/ndelvalle/v-blur)


Vue directive to blur an element dynamically. Useful tp partially hide elements, use it with a spinner when content is not ready among other things.

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
```

```js
<script>
  export default {
      data () {
        return {
          isBlurred: true,
          
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
  <div v-blur="isBlurred"></div>
  <div v-blur="blurConfig"></div>
</template>
```

## Example
![v-blur](https://raw.githubusercontent.com/ndelvalle/v-blur/master/v-blur-image.png)

## Todo
Add functionality to change opacity, filter and transition on setup time. Contributions welcome :)

## License
[MIT License](https://github.com/ndelvalle/v-blur/blob/master/LICENSE)

## Style
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
