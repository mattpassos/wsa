import firebase from "firebase/app"
import "firebase/auth"
import { toast } from "../toast"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCTgCbtJaPxWl-7T0aGdHGSlvSOqBUaW2w",
  authDomain: "what-street-art-dev.firebaseapp.com",
  projectId: "what-street-art-dev",
  storageBucket: "what-street-art-dev.appspot.com",
  messagingSenderId: "537748713199",
  appId: "1:537748713199:web:c3ee9f9b87a31083d0351a",
})

export async function loginUser(username: string, password: string) {
  const email = `${username}@whatstreetart.com`

  try {
    const res = await firebase.auth().signInWithEmailAndPassword(email,password)

    console.log(res)
    return true
  } catch(error) {
    toast(error.message, 4000)
    return false
  }
}

export async function registerUser(username: string, password: string) {
  const email = `${username}@whatstreetart.com`
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword

    (email, password)
    console.log(res)
    return true
  } catch(error) {
    toast(error.message, 4000)
    return false
  }
}

export enum FirebaseCollection {
  users = "users",
  artworks = "artworks",
}

export interface FilteringCriteria<T> {
  property: keyof T;
  limit: number;
}
