import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BubbleTea from "@/components/BubbleTea.vue";

createApp(App).component('bubble-tea',BubbleTea)
.use(router).mount('#app')
