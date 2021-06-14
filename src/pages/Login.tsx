import React, { useState, useEffect } from 'react'
import { IonPage, IonContent, IonButton, IonInput, IonToolbar } from "@ionic/react";

import ExploreContainer from '../components/ExploreContainer';
import Header from "../components/Header";
import "./Login.css";

const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function loginUser() {
        console.log(username, password)
    }

  return (
        <IonPage>
            <Header />
            <IonToolbar className="loginT">Login</IonToolbar>
            <IonContent>
            
                    <IonInput
                        type="text" 
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
                <IonButton onClick={loginUser}>Login</IonButton>
            
            <div className="ion-padding">You don't have an account? Register</div>
            </IonContent>
        </IonPage>
    );
};

export default Login;