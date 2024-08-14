import { createApp } from 'vue'
import App from './App.vue'
import ScrollNumber from '../dist/vue3-scroll-number.js'
import '../dist/index.css'

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
