import VLoading from "element-plus/es/components/loading/index"
import "element-plus/es/components/loading/style/index"
import { App } from 'vue'
const components = [
  VLoading
]

export default function styleImport (app: App) {
  components.forEach(component => {
    app.use(component)
  })
  return app
}