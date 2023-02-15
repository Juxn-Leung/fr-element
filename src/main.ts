import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import components from '@/components/core/install'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/tailwind.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/stackoverflow-light.css'

const app = createApp(App)

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block: any) => {
      hljs.highlightElement(block)
  })
})
app.use(components)
app.use(store)
app.use(router)
app.mount('#app')
