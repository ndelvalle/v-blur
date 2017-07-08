# v-blur

[![Codeship Status](https://img.shields.io/codeship/3a56b780-4639-0135-c530-069e5644f905/master.svg)](https://app.codeship.com/projects/213256)
[![Coverage Status](https://coveralls.io/repos/github/ndelvalle/v-blur/badge.svg?branch=master)](https://coveralls.io/github/ndelvalle/v-blur?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/ndelvalle/v-blur/badge.svg?branch=master)](https://coveralls.io/github/ndelvalle/v-blur?branch=master)
[![bitHound Overall Score](https://www.bithound.io/github/ndelvalle/v-blur/badges/score.svg)](https://www.bithound.io/github/ndelvalle/v-blur)
[![bitHound Dev Dependencies](https://www.bithound.io/github/ndelvalle/v-blur/badges/devDependencies.svg)](https://www.bithound.io/github/ndelvalle/v-blur/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/ndelvalle/v-blur/badges/code.svg)](https://www.bithound.io/github/ndelvalle/v-blur)


Vue directive to blur a specific element dynamically

## Install

```bash
$ npm install --save v-blur
```

```bash
$ yarn add v-blur
```


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
          isBlurred: true
        }
      }
    }
  };
</script>

<template>
  <div v-blur="isBlurred"></div>
</template>
```

## License
[MIT License](https://github.com/ndelvalle/v-blur/blob/master/LICENSE)

## Style
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

