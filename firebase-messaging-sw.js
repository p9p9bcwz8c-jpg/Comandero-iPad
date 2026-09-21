importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js');
const firebaseConfig={apiKey:'AIzaSyC0DYXnRglp4xUYKkLv9nq0SVML4hECoWg',authDomain:'la-yola-tpv.firebaseapp.com',databaseURL:'https://la-yola-tpv-default-rtdb.europe-west1.firebasedatabase.app',projectId:'la-yola-tpv',storageBucket:'la-yola-tpv.firebasestorage.app',messagingSenderId:'810185940100',appId:'1:810185940100:web:db44bbf3f641c9bdbf36d1'};
firebase.initializeApp(firebaseConfig);const messaging=firebase.messaging();
messaging.onBackgroundMessage(payload=>{const n=payload.notification||{};self.registration.showNotification(n.title||'Nueva comanda',{body:n.body||'Hay una nueva comanda pendiente.',data:payload.data||{}})});
self.addEventListener('notificationclick',event=>{event.notification.close();const target=event.notification?.data?.role==='cocina'?'/': '/';event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{for(const c of list){if('focus' in c)return c.focus();}return clients.openWindow(target);}));});
