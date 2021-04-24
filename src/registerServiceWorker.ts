/* eslint-disable no-console */

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
    register(`${ process.env.BASE_URL }service-worker.js`, {
        ready() {
            console.info('App is being served from cache by a service worker.');
            console.info('For more details, visit https://goo.gl/AFskqB');
        },
        registered() {
            console.info('Service worker has been registered.');
        },
        cached() {
            console.info('Content has been cached for offline use.');
        },
        updatefound() {
            // Clear cache
            caches.keys().then(cacheNames => {
                cacheNames.forEach(cacheName => {
                    caches.delete(cacheName);
                });
            });
            console.info('New content is downloading.');
        },
        updated() {
            location.reload();
            alert('Phiên bản mới đã có sẵn, nhấn Ctrl+F5 để tiến hành cập nhật');
            console.info('New content is available, please refresh.');
        },
        offline() {
            console.warn('No internet connection found. App is running in offline mode.');
        },
        error(error) {
            console.error('Error during service worker registration: ', error);
        }
    });
}
