import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDX1pW8vwLsgAcu5ggq-n5kK3FGBg5N5Ps",
  authDomain: "super-react-firebase-template.firebaseapp.com",
  databaseURL: "https://super-react-firebase-template.firebaseio.com",
  projectId: "super-react-firebase-template",
  storageBucket: "super-react-firebase-template.appspot.com",
  messagingSenderId: "203156928750"
}

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}

export default Firebase;