import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBC5r4-BXBH8A1xj5_oiXuWIA6jk0L0PEM",
    authDomain: "perfumania-17ad1.firebaseapp.com",
    projectId: "perfumania-17ad1",
    storageBucket: "perfumania-17ad1.appspot.com",
    messagingSenderId: "137988579985",
    appId: "1:137988579985:web:1829f1adce321921d31530"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
    return firebase.firestore(app)
}