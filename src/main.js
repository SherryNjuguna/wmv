import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css';
import AOS from '../plugins/aos' 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const app = createApp(App)
app.use(router)
app.use(AOS)
app.mount('#app')
