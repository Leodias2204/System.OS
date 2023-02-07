const firebase = require("firebase-admin");

const credentials = require("./os-system-autentic-firebase-adminsdk-6wu5j-05425d1792.json");

firebase.initializeApp({
    credential: firebase.credential.cert(credentials),
    databaseURL: "https://os-system-autentic.firebaseio.com",
});

module.exports = firebase;