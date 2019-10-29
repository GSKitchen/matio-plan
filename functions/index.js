const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

//crete notification
const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("Notification created", doc));
};

//funtion for new project creattion
exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: "Added a new Project",
      user: `${project.authorFirstName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });

//function for user join
exports.userJoined = functions.auth.user().onCreate(user => {
  //let userAuth = admin.auth().currentUser;
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      //for send auth mail
      //userAuth.sendEmailVerification();
      // save notification
      const newUser = doc.data();
      const notification = {
        content: "Joined the party",
        user: `${newUser.firstName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return createNotification(notification);
    });
});
