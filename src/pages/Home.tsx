import { IonContent, IonPage, IonButton, IonInput } from '@ionic/react';
import './Home.css';
import Header from "../components/Header";
import { useState, useEffect } from 'react';


const Home: React.FC = () => {
  const [input , setInput] = useState<string>('')

  useEffect(() => {
    console.log(input)
  }, [input])
  
  return (

    <IonPage>
      <Header />
      
      <IonContent>
        <div className="ion-padding">
        
        <IonInput></IonInput>
        <IonButton routerLink="/Login">Login</IonButton>
        <IonButton routerLink="/Register">Register</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

