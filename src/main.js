import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 国际化插件
import i18n from './language/i18n'


const app = createApp(App);

app.use(store).use(router).use(ElementPlus).use(i18n)
app.mount('#app')
