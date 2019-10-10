export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async code
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Sabbir",
        authorLastName: "Ahmad",
        authorId: 233332,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
