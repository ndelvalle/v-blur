# v-blur

[![Codeship Status](https://img.shields.io/codeship/3a56b780-4639-0135-c530-069e5644f905/master.svg)](https://app.codeship.com/projects/213256)
[![Coverage Status](https://coveralls.io/repos/github/ndelvalle/v-blur/badge.svg?branch=master)](https://coveralls.io/github/ndelvalle/v-blur?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4b151e093b7e44ffbb660a84381d84ed)](https://www.codacy.com/app/ndelvalle/v-blur?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ndelvalle/v-blur&amp;utm_campaign=Badge_Grade)
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

## Result

![v-blur](https://raw.githubusercontent.com/ndelvalle/v-blur/master/v-blur-image.png)

## License
[MIT License](https://github.com/ndelvalle/v-blur/blob/master/LICENSE)

## Style
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

