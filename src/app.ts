import { initializeFirebase, askForPermissionToSendNotificationd } from "./push_notification";

initializeFirebase();
self.addEventListener('load', (event) => {
    askForPermissionToSendNotificationd();
})