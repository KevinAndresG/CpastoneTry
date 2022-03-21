import React from "react"
import { Header } from "./components/login/Header.jsx";
import { LogButton } from "./components/login/LogButton";
import { RegButton } from "./components/login/RegButton";
import { Lorem } from "./components/login/Lorem";
import './components/styles/bodyHome.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <LogButton />
      <p class="divOr">OR</p>
      <Lorem />
      <RegButton />
    </React.Fragment>
  );
}

export default App;
