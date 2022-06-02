import { App } from 'vue'
import PDataDisplay from './PDataDisplay.vue'

PDataDisplay.install = (app: App) => {
  app.component('PDataDisplay', PDataDisplay)
}

export default PDataDisplay