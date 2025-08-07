import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap and Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css'

// AOS (Animate On Scroll)
import AOS from 'aos'
import 'aos/dist/aos.css'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const app = createApp(App)

app.use(router)

app.mount('#app')

// ✅ Initialize AOS after app is mounted
AOS.init({
  once: false,
  duration: 800,
})
