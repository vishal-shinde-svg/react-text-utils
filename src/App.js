import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
  };

  const setToggle = (cls) => {
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("dark mode is enabled", "successfully");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "successfully");
    }
  };

  return (
    <>
      <Router>
        {/* so here you have to write title here it meas you have to pass props  */}
        {/* <Navbar title="UtilText"  about = "about us"/> */}
        <Navbar mode={mode} setToggle={setToggle} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="To analyze the Given text.."
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
