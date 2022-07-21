import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'
import All from './mock/index'
import './assets/site.css'

axios.defaults.baseURL = 'http://localhost:8080'

console.log('import all', All)
loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')

//App.config.globalProperties.$axios = axios
