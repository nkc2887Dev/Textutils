import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import About from "./Components/About";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const handleOnMode = () => {
    if (mode === "dark") {
      setMode("light");
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      // let tx = document.getElementById("mybox");
      // tx.style.backgroundColor = "white";
      // tx.style.color = "black";
      showAlert("Light Mode is ON", "success");
      document.title = "TextUtils | Light Mode";
      // poping some text
      // setInterval(() => {
      //   document.title = "TextUtils | Light Mode";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "TextUtils | convert to Dark Mode";
      // }, 1500);
    } else {
      setMode("dark");
      setModeText("Enable Light Mode");
      document.body.style.backgroundColor = "#6c757d";
      document.body.style.color = "white";
      // let tx = document.getElementById("mybox");
      // tx.style.backgroundColor = "#6c757d";
      // tx.style.color = "white";
      showAlert("dark Mode is ON", "success");
      document.title = "TextUtils | Dark Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          modeText={modeText}
          handleOnMode={handleOnMode}
        />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/home">
            <h1>Destination of every journey is Home!</h1>
           </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/textForm">
            <TextForm mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
