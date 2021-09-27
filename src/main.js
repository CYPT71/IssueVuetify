import { createApp } from 'vue'

import Vuetify from './plugins/vuetify'
import App from './App.vue'
import router from "./router/index"
import Particles from "particles.vue3";

const app = createApp(App)



app.use(router)
app.use(Particles)
app.use(Vuetify)

app.mount('#app')


