import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from "./router/index"
import Particles from "particles.vue3";
 
const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(Particles)

app.mount('#app')
