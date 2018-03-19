import firebase from 'firebase'

export function savePhotoInDB (url, user) {
  firebase.database().ref().child('photos').push({
    photoUrl: url,
    uid: user.uid,
    displayName: user.displayName,
    avatar: user.photoURL
  })
}
