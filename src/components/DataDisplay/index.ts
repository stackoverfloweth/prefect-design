import { App } from 'vue'
import PDataDisplay from './PDataDisplay.vue'
import PFormDisplay from './PFormDisplay.vue'

PDataDisplay.install = (app: App) => {
  app.component('PDataDisplay', PDataDisplay)
}

PFormDisplay.install = (app: App) => {
  app.component('PFormDisplay', PFormDisplay)
}

export { PDataDisplay, PFormDisplay }