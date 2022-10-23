import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import index from "./router";
import { createPinia } from "pinia";

// import { registerStore } from "./store";
// createApp(App).mount('#app')
const app = createApp(App);

app.use(createPinia());


app.use(index);

app.mount("#app");