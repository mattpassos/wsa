import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonInput,
  IonCard,
  IonCardSubtitle,
  IonText,
  IonLoading,
  IonCardHeader,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { toast } from "../toast";
import { registerUser } from "../models/firebase";
import Header from "../components/Header";
import "./Register.css";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [busy, setBusy] = useState<boolean>(false);

  async function register() {
    // validation
    setBusy(true);
    if (password !== cpassword) {
      return toast("Passwords do not match");
    }
    if (username.trim() === "" || password.trim() === "") {
      return toast("Username and password are required");
    }

    const res = await registerUser(username, password);
    if (res) {
      toast("You have registered successfully!");
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <Header />
      <IonLoading
        message="Registration in progress"
        duration={0}
        isOpen={busy}
      />
      <IonContent className="ion-padding">
        <IonCard className="registerCard">
          <IonCardHeader>
            <IonText className="t1" color="light">
              Create an Account
            </IonText>
            <br></br>
            <IonText className="t2" color="light">
              Please enter your Email and a Password
            </IonText>
          </IonCardHeader>
          <IonCardSubtitle>
            <IonInput
              className="ionInputRegister"
              placeholder="Username"
              onIonChange={(e: any) => setUsername(e.target.value)}
            />
            <br></br>
            <IonInput
              className="ionInputRegister"
              type="password"
              placeholder="Password"
              onIonChange={(e: any) => setPassword(e.target.value)}
            />
            <br></br>
            <IonInput
              className="ionInputRegister"
              type="password"
              placeholder="Confirm Your Password"
              onIonChange={(e: any) => setCPassword(e.target.value)}
            />
          </IonCardSubtitle>
        </IonCard>
        <br></br>
        <div className="buttonRegister">
          <IonButton onClick={register}>Register</IonButton>
          <p className="newHere">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
