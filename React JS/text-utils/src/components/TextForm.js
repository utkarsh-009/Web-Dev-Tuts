import React, { useState } from 'react'


export default function TextForm(props) {
    // updating state to set text using setText function
    const [text, setText] = useState('Enter Text Here');
    // text = "new text" // Wrong way to set text
    // setText("new text") // Correct way to set text

    const handleUpperClick = () => {
        console.log("Uppercase button clicked!");
        let upperText = text.toUpperCase();
        setText(upperText);
    };

    const handleLowerClick = () => {
        console.log("Uppercase button clicked!");
        let upperText = text.toLowerCase();
        setText(upperText);
    };

    // event is the text change in textarea, on changing the state we will setText as the value in textarea
    const handleOnChange = (event) => {
        console.log("On changed!");
        setText(event.target.value);
    };

    return (
        <>
            <div className="my-4">
                <h3>{props.heading}</h3>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <div>
                <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To Lowercase</button>
            </div>
            <div className="container my-3">
                <h4>Text Summary</h4>
                <p> {text.trim().split(/\s+/).length} words and {text.length} characters</p>
                <p> Read Time: {text.trim().split(/\s+/).length * 0.008} minutes </p>
            </div>
        </>
    );
}