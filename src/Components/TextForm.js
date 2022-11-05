import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("hello","success");
  };

  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  
  const handleTtClick = () => {
    let newText = text.toLowerCase().split(" ").map((word)=>{
     return word.charAt(0).toUpperCase() + word.slice(1)})
    .join(" ");
    setText(newText);
  };

    // It's Not Working 
  const handleScClick = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const handleReverse = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const handleResClick = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleCopyClick = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <>
      {" "}
      <div className="container">
        <div className="form-group my-4">
          <h1>Type Some Beautiful Thoughts....</h1>
          <textarea
            className="form-control my-3"
            id="mybox"
            rows="10"
            value={text}
            // mode={props.mode}
            style = {{
              backgroundColor : props.mode ==="light"? "white":"#6c757d",
              color : props.mode === "light" ? "black":"white"
            }}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleUpClick}
          className="btn btn-primary mx-1"
          style = {{
            backgroundColor :props.mode === "light" ? "white":"#6c757d",
            color :props.mode === "light" ? "black":"white"
          }}
        >
          UPPERCASE
        </button>
        <button
          type="button"
          onClick={handleLwClick}
          className="btn btn-primary mx-1"
          style = {{
            backgroundColor : props.mode ==="light"? "white":"#6c757d",
            color : props.mode === "light" ? "black":"white"
          }}
        >
          lowercase
        </button>
        <button
          type="button"
          onClick={handleTtClick}
          className="btn btn-primary mx-1"
          style = {{
            backgroundColor :props.mode === "light" ? "white":"#6c757d",
            color :props.mode === "light" ? "black":"white"
          }}
          
        >
          Title Case
        </button>
        <button
          type="button"
          onClick={handleScClick}
          className="btn btn-primary mx-1"
          style = {{
            backgroundColor :props.mode === "light" ? "white":"#6c757d",
            color :props.mode === "light" ? "black":"white"
          }}
        >
          Sentence case
        </button>
        <button
          type="button"
          onClick={handleReverse}
          className="btn btn-primary mx-1"
          style = {{
            backgroundColor :props.mode === "light" ? "white":"#6c757d",
            color :props.mode === "light" ? "black":"white"
          }}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={handleResClick}
          className="btn btn-primary mx-1"
          style = {{
            backgroundColor :props.mode === "light" ? "white":"#6c757d",
            color :props.mode === "light" ? "black":"white"
          }}
        >
          Remove Extra Space
        </button>
        <button
          type="button"
          onClick={handleSpeakClick}
          className="btn btn-primary mx-1"
          style = {{
            backgroundColor :props.mode === "light" ? "white":"#6c757d",
            color :props.mode === "light" ? "black":"white"
          }}
        >
          Speak
        </button>
        <button
          type="button"
          onClick={handleCopyClick}
          className="btn btn-primary mx-1"
          style = {{
            backgroundColor :props.mode === "light" ? "white":"#6c757d",
            color :props.mode === "light" ? "black":"white"
          }}
        >
          Copy to Clipboard
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="btn btn-primary mx-1"
          style = {{
            backgroundColor :props.mode === "light" ? "white":"#6c757d",
            color :props.mode === "light" ? "black":"white"
          }}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <hr />
        <p className="mx-3">
          {" "}
          {text.split(" ").length -1} words, {text.length} Character
        </p>
        <p className="mx-3"> {text.split("").length * 0.003} minutes to Read</p>
        <div>
          <h3>Preview</h3>
          <p className="mx-3">
            {text.length > 0 ? text : "Enter Some Text To see Preview"}
          </p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
