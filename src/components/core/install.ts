import { App } from 'vue'
import FormItem from '@/components/core/FormItem.vue'
import FrFormItem from '@/components/core/FrFormItem.vue'
import FormInput from '@/components/core/FormInput.vue'
import FrFormGroupTitle from '@/components/core/FrFormGroupTitle.vue'

export const components = [
  FormItem,
  FrFormItem,
  FormInput,
  FrFormGroupTitle,
]

const install = (app: App): void => {
  components.forEach(component => {
    // eslint-disable-next-line
    // @ts-ignore
    app.component(component.__name, component)
  })
}

export default {
  install
}
