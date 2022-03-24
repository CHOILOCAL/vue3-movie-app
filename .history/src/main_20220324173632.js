import { createApp } from 'vue'
import App from './App'
import router from './routes' // Same as './routes/index.js'

createApp(App)
  .use(router)
  .mount('#app')
