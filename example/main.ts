import { createApp } from 'vue'
import App from './App.vue'
import ScrollNumber from '../src/index'

createApp(App)
  .use(ScrollNumber, {
    // transformDuration: 1500,
    // fractionDigits: 3,
    // prefix: '^_^',
    // infix: '$',
    // suffix: '@_@',
    // thousandSeparator: ','
  })
  .mount('#app')
