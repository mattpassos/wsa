import React from 'react'
import { IonPage, IonContent, IonButton, IonCard, IonCardHeader, IonItem, IonInput } from "@ionic/react";

import ExploreContainer from '../components/ExploreContainer';
import Header from "../components/Header";
import "./SignUp.css";

const Signup: React.FC = () => {
  return (
        <IonPage>
        <Header />
            <IonContent>
            <IonCard>
                <IonCardHeader className="text-center mb-4">Sign Up</IonCardHeader>
                <IonItem>
                    <IonInput type="text" placeholder="Username"></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput type="password" placeholder="Password"></IonInput>
                </IonItem>
                <IonButton>Login</IonButton>
            </IonCard>
            <div className="w-100 text-center mt-2">
            Already have an account? Log In
            </div>
            </IonContent>
        </IonPage>
    );
};

export default Signup;