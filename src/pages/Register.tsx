import React from 'react'
import { IonPage, IonContent, IonButton, IonInput } from "@ionic/react";

import Header from "../components/Header";
import "./Register.css";

const Register: React.FC = () => {
  return (
        <IonPage>
        <Header />
            <IonContent className="ion-padding">
                <IonInput></IonInput>
                <IonButton>Test</IonButton>
            
            </IonContent>
        </IonPage>
    );
};

export default Register;