import { createApp } from 'vue'
import App from './App.vue'
import ScrollNumber from './index'
// import '../dist/style.css'

createApp(App)
  .use(ScrollNumber, {
    transformDuration: 1500,
    fractionDigits: 3,
    prefix: 'QQ',
    infix: '$',
    suffix: 'num',
    thousandSeparator: ','
  })
  .mount('#app')
