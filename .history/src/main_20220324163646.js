import { createApp } from 'vue'
import App from './App'
import router from './routes' // Same as './routes/index.js'

createApp(App)
  .use(store)
  .use(router)
  .use(loadImage)
  .mount('#app')
