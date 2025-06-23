// plugins/aos.js
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  install(app) {
    app.AOS = AOS
    app.config.globalProperties.AOS = AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,     
      mirror: true,     
      startEvent: 'DOMContentLoaded'
    })
  }
}
