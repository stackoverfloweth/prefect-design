import { App } from 'vue'
import PContextSidebar from './PContextSidebar.vue'

const install = (app: App): void => {
  app.component('PContextSidebar', PContextSidebar)
}

export { PContextSidebar, install }