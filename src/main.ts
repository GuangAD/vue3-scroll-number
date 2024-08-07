import { createApp } from 'vue'
import App from './App.vue'
import ScrollNumber from './index'
// import '../dist/style.css'

createApp(App)
  .use(ScrollNumber, {
    transformDuration: 2500
  })
  .mount('#app')
