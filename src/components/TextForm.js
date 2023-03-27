import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //   console.log("hi" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let lowData = text.toLowerCase();
    setText(lowData);
  };

  const cancleClick = () => {
    let lowData1 = "";
    setText(lowData1);
  };

  const getTextCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    text.setSelectionRange(0, 99999999);
    navigator.clipboard.writeText(text.value);
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const textChange = (event) => {
    // console.log("change the value");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            onChange={textChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to the upper case{" "}
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to the upper case{" "}
        </button>

        <button className="btn btn-primary mx-2" onClick={cancleClick}>
          clear{" "}
        </button>
        <button className="btn btn-primary mx-2" onClick={getTextCopy}>
          copy text{" "}
        </button>

        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>
          Remove Extra spaces
        </button>
      </div>

      <div className="container my-5">
        <h3>Here you text summary...</h3>
        <p className="my-3">
          The Number of Word {text.split(" ").length} and Number of Character is{" "}
          {text.length}{" "}
        </p>
        <h2 className="my-3"> what time take to Read... </h2>
        <p>{0.008 / text.split(" ").length}</p>

        <h3 className="my-3">Preview...</h3>
        <h3>{text}</h3>
      </div>
    </>
  );
}
