import { App } from 'vue'
import PContextNavItem from './PContextNavItem.vue'

const install = (app: App): void => {
  app.component('PContextNavItem', PContextNavItem)
}

export { PContextNavItem, install }