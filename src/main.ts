import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/router'
import Vue from 'vue'
import store from './store'
import { VueQueryPlugin } from '@tanstack/vue-query'

createApp(App).use(router).use(VueQueryPlugin).mount('#app')
