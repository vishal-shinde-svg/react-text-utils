import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("hi" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to the upper case");
  };

  const handleLowClick = () => {
    let lowData = text.toLowerCase();
    setText(lowData);
    props.showAlert("converted to the lower case");
  };

  const cancleClick = () => {
    let lowData1 = "";
    setText(lowData1);
    props.showAlert("clear the text Area");
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
    //console.log("change the value");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "dark" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div
          className="mb-3"
          style={{ color: props.mode === "light" ? "dark" : "white" }}
        >
          <textarea
            className="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            onChange={textChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "gray",
              color: props.mode === "light" ? "dark" : "white",
            }}
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
          The Number of Word{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          and Number of Character is {text.length}{" "}
        </p>
        <h2 className="my-3"> what time take to Read... </h2>
        <p>{0.008 * text.split(" ").length} take minutes to read </p>

        <h3 className="my-3">Preview...</h3>
        <h3>{text.length > 0 ? text : "Enter something to prview here..."}</h3>
      </div>
    </>
  );
}
