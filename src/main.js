

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'primevue/resources/primevue.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-teal/theme.css'
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import 'primeflex/primeflex.css'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)
app.component('Button', Button);
app.component('Card', Card);
app.component('InputText', InputText);
app.mount('#app')
