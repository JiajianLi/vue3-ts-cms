import { App } from 'vue'

import {
  ElButton,
  ElAlert,
  ElAside,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio
} from 'element-plus'

const components = [
  ElAlert,
  ElAside,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio
]

export default function registerElementComponent(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
