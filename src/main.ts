import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// ✅ ADD THIS
import { registerSW } from 'virtual:pwa-register'

createApp(App).mount('#app')

// ✅ ADD THIS
registerSW({ immediate: true })