import firebase from 'firebase';

class FirebaseSDK {
  constructor() {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: 'AIzaSyBLc6n7m1tXhlulDBV3ePxtizyh5y0U5Io',
        authDomain: 'chatroom-e6402.firebaseapp.com',
        databaseURL: 'https://chatroom-e6402.firebaseio.com',
        projectId: 'chatroom-e6402',
        storageBucket: 'chatroom-e6402.appspot.com',
        messagingSenderId: '212153802482'
      });
    }
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback);
  };
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;
