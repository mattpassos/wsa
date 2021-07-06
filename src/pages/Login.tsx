import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonInput,
  IonText,
  IonLoading,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { loginUser } from "../models/firebase";
import Header from "../components/Header";
import "./Login.css";
import { toast } from "../toast";

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    setBusy(true);
    const res = await loginUser(username, password);
    if (res) {
      toast("You have logged in!");
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <Header />
      <IonLoading message="Please wait.." duration={0} isOpen={busy} />
      <IonContent>
        <IonCard className="loginCard">
          <IonCardHeader>
            <IonText className="t1" color="light">
              Log in to your Account
            </IonText>
            <br></br>
            <IonText className="t2" color="light">
              Please enter your Email and Password
            </IonText>
          </IonCardHeader>
          <IonCardSubtitle>
            <IonInput
              color="light"
              className="ionInputLogin"
              placeholder="Email"
              onIonChange={(e: any) => setUsername(e.target.value)}
            />
            <br></br>
            <IonInput
              color="light"
              className="ionInputLogin"
              type="password"
              placeholder="Password"
              onIonChange={(e: any) => setPassword(e.target.value)}
            />
          </IonCardSubtitle>
        </IonCard>
        <br></br>
        <div className="buttonLogin">
          <IonButton className="button" onClick={login}>
            Login
          </IonButton>
          <IonButton className="button">Cancel</IonButton>
          <p className="newHere">
            New here? <Link to="/register">Register</Link>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
