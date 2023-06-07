import { createApp } from 'vue'
import App from './App.vue'

// 引入 mock
import '@/mock'
import kLib from '@/libs'
import './styles/index.scss'
import router from './router/index.js'
import { useRem } from '@/utils/flexible'
// 注册 svg-icons
import 'virtual:svg-icons-register'
useRem()
createApp(App).use(router).use(kLib).mount('#app')
