import React, { useState } from 'react'
import { IonPage, IonContent, IonButton, IonInput, IonToolbar, IonLoading } from "@ionic/react";
import { Link } from 'react-router-dom';
import { loginUser } from "../models/firebase"; 
import Header from "../components/Header";
import "./Login.css";
import { toast } from '../toast';

const Login: React.FC = () => {

    const [busy, setBusy] = useState<boolean>(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
        setBusy(true)
        const res = await loginUser(username, password)
        if(res) {
            toast('You have logged in!')
        }
        setBusy(false)
    }

  return (
        <IonPage>
            <Header />
            <IonLoading message="Please wait.." duration={0} isOpen={busy} />
            <IonToolbar className="loginT">Login</IonToolbar>
            <IonContent className="ion-padding">           
                    <IonInput
                        placeholder="Username" 
                        onIonChange={(e: any) => setUsername(e.target.value)}
                        />
                        <br></br>
                    <IonInput 
                        type="password"
                        placeholder="Password" 
                        onIonChange={(e: any) => setPassword(e.target.value)}
                        />
                        <br></br>
                <IonButton onClick={login}>Login</IonButton>            
            <p>New here? <Link to="/register">Register</Link></p>
            </IonContent>
        </IonPage>
    );
};

export default Login;