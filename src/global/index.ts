import { App } from 'vue'
import registerElementComponent from './register-element'

export function registerApp(app: App): void {
  app.use(registerElementComponent)
}
