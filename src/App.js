import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("dark");

  const setToggle = () => {
    setMode("dark");
  };

  return (
    <>
      {/* so here you have to write title here it meas you have to pass props  */}
      {/* <Navbar title="UtilText"  about = "about us"/> */}
      <Navbar mode={mode} setToggle={setToggle} />
      <div className="container my-3">
        <TextForm heading="To analyze the Given text.." />
        <About />
      </div>
    </>
  );
}

export default App;
