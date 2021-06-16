import { IonApp } from "@ionic/react";
import { Route } from 'react-router-dom';
import { IonReactRouter } from "@ionic/react-router";
import BottomMenu from "./components/BottomMenu";
import Header from "./components/Header";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./config";
import { Suspense } from "react";

const App: React.FC = () => (
  <Suspense fallback={<div>Test</div>}>
    <IonApp>
      <Header />
        <BottomMenu />
      <IonReactRouter>
          <Route path="/" component={Home} exact />
          <Route path="/Login" component={Login} exact />
          <Route path="/Register" component={Register} exact />
          <Route path="/Settings" component={Settings} exact />
      </IonReactRouter>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        
      </FirebaseAppProvider>
    </IonApp>
  </Suspense>
);

export default App;
