import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

const app = createApp(App)
app.use(router)
app.use(VuePlyr, {
    plyr: {
        fullscreen: { enabled: true },
        captions: { active: true },
        youtube: {
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            disablekb: 0,
            fs: 0
        },
        quality: {
            default: 576,
            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
        },
      },
  })
app.mount('#app')
