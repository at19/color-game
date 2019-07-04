const firebase = require("firebase/app");
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDic3lgSNLBrxXcnKijtBhJZl0ldwjv1TA",
  authDomain: "choosing-colors.firebaseapp.com",
  databaseURL: "https://choosing-colors.firebaseio.com",
  projectId: "choosing-colors",
  storageBucket: "choosing-colors.appspot.com",
  messagingSenderId: "1095059129734",
  appId: "1:1095059129734:web:b94c0a918d83a16e"
};

export function initializeApp() {
  firebase.initializeApp(firebaseConfig);
}
