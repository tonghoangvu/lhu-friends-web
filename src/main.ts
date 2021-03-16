import { createApp } from 'vue';
import '@/registerServiceWorker';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import '@/assets/your-css/colors.css';
import '@/assets/your-css/default.css';
import '@/assets/your-css/default-fix.css';
import '@/assets/your-css/classes.css';
import '@/assets/your-css/sizes.css';
import '@/assets/your-css/flex.css';
import '@/assets/your-css/scrollbar.css';
import '@/assets/your-css/components.css';
import '@/assets/your-css/utils.css';

createApp(App).use(store).use(router).mount('#app');
