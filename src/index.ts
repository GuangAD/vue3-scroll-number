import ScrollNumber from './components/ScrollNumber.vue'
import type { App } from 'vue'
import { setOptions } from './options'
import type { IOptions } from './options'
export default function intsall(app: App, options?: IOptions) {
  app.component(ScrollNumber.name!, ScrollNumber)
  options && setOptions(options)
}

export { ScrollNumber }
export type { IOptions }
