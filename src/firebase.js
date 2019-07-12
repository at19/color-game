const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

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

export function signInUser(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function createUser(name, email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function addUserToFirestore(uid, name, email) {
  firebase
    .firestore()
    .collection("users")
    .add({
      uid,
      name,
      email,
      highScoreRGB: 0,
      highScoreHEX: 0,
      highScoreHSL: 0,
      dateJoined: new Date(),
      colorPalettes: null,
      profilePic: null,
      bio: null
    });
}

export function signOutUser() {
  return firebase.auth().signOut();
}

export function updateHighScore(colorPattern, points) {
  if (firebase.auth().currentUser !== null) {
    const sortString = `highScore${colorPattern}`;

    const query = firebase
      .firestore()
      .collection("users")
      .where("uid", "==", firebase.auth().currentUser.uid);

    query.get().then(res => {
      if (res.docs[0].data()[sortString] < points) {
        // New High Score
        res.docs[0].ref.update({
          [sortString]: points
        });
      }
    });
  }
  // firebase.firestore().collection("users").orderBy(sortString, "desc")
}

export function getLeaderboardContent(colorPattern) {
  const sortString = `highScore${colorPattern}`;
  const query = firebase
    .firestore()
    .collection("users")
    .orderBy(sortString, "desc");

  // return query.get().then(res => {
  //   res.docs.map(e => ({
  //     name: e.data().name,
  //     points: e.data()[`highScore${colorPattern}`]
  //   }));
  // });

  return query.get();
}

export function getAuthObserver(userIsSignedIn) {
  return firebase.auth().onAuthStateChanged(user => {
    if (user) {
      userIsSignedIn(user);
    }
  });
}

export function getCurrentUser() {
  return firebase.auth().currentUser;
}

export function getUserData(uid) {
  return firebase
    .firestore()
    .collection("users")
    .where("uid", "==", uid)
    .get();
}
