import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
        apiKey: "AIzaSyBGlo3A8ERjakCG1l4NBgBp2SoiyCRRPpw",
        authDomain: "instagram-9031c.firebaseapp.com",
        projectId: "instagram-9031c",
        storageBucket: "instagram-9031c.appspot.com",
        messagingSenderId: "460222328390",
        appId: "1:460222328390:web:45a3fb2c5b1d40bd37a447",
        measurementId: "G-YJ3P37LKTC"
    });

    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const storage = firebase.storage();

    export { db, auth, storage };

    