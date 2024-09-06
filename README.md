# vue3-scroll-number

A vue3 digital scroll up and down animation component

## install

```sh
pnpm add @ggc12319/vue3-scroll-number
```

### configuration

```js
import { createApp } from 'vue'
import App from './App.vue'
import ScrollNumber from '@ggc12319/vue3-scroll-number'
import '@ggc12319/vue3-scroll-number/style.css'

createApp(App)
  .use(ScrollNumber, {
    transformDuration: 1500,
    fractionDigits: 3,
    prefix: '^_^',
    infix: '$',
    suffix: '@_@',
    thousandSeparator: ','
  })
  .mount('#app')
```

### Used in components

```vue
<script setup lang="ts">
import { ref } from 'vue'
const value = ref(-123.45)
const add = () => {
  value.value += 20
}
const sub = () => {
  value.value -= 20
}

const percentage = ref(24.8)
const addPercentage = () => {
  percentage.value += 2.4
}
const subPercentage = () => {
  percentage.value -= 2.4
}
</script>

<template>
  <div>
    <ScrollNumber :value="value" />
    <span style="margin-left: 50px">
      <button @click="add">add</button>
      <button @click="sub">sub</button>
    </span>
  </div>
  <div>
    <ScrollNumber :value="percentage" :fractionDigits="1" prefix="" infix="" suffix="%" />
    <span style="margin-left: 50px">
      <button @click="addPercentage">add</button>
      <button @click="subPercentage">sub</button>
    </span>
  </div>
</template>
```

## props

| Attribute         | Description                        | Type   | Default |
| ----------------- | ---------------------------------- | ------ | ------- |
| value             | figure                             | number | -       |
| transformDuration | transform duration                 | number | 1500    |
| fractionDigits    | fraction digits                    | number | 0       |
| prefix            | prefix                             | string | ''      |
| infix             | prefix but after the negative sign | string | ''      |
| suffix            | suffix                             | string | ''      |
| thousandSeparator | the thousand separator             | string | ,       |
