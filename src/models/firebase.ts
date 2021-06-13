import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCTgCbtJaPxWl-7T0aGdHGSlvSOqBUaW2w",
  authDomain: "what-street-art-dev.firebaseapp.com",
  projectId: "what-street-art-dev",
  storageBucket: "what-street-art-dev.appspot.com",
  messagingSenderId: "537748713199",
  appId: "1:537748713199:web:c3ee9f9b87a31083d0351a",
})

export const auth = app.auth()
export default app

export enum FirebaseCollection {
  users = "users",
  artworks = "artworks",
}

export interface FilteringCriteria<T> {
  property: keyof T;
  limit: number;
}
