import { createApp } from 'vue'
import { registerApp } from './global'

import App from './App.vue'

import router from './router'
import store from './vuex'

const app = createApp(App)

// element组件注册/其他
app.use(registerApp)

app.use(router)
app.use(store)
app.mount('#app')
