import React, {useState} from 'react';

export default function TestForm(props) {
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }

  const titleCase = () => {
    let newText = text.toLowerCase().split(' ');
    for(let i=0; i<newText.length; i++) {
      newText[i] = newText[i][0].toUpperCase()+newText[i].slice(1);
    }
    setText(newText.join(' '));
    props.showAlert("Converted to titlecase","success");
  }

  const toggleCase = () => {
    let newText = text.split('');
    for(let i=0; i<newText.length; i++) {
      if(newText[i] === newText[i].toUpperCase() && newText[i] !== newText[i].toLowerCase()) {
        newText[i] = newText[i].toLowerCase();
      } else if(newText[i] !== newText[i].toUpperCase() && newText[i] === newText[i].toLowerCase()) {
        newText[i] = newText[i].toUpperCase();
      }
    }
    setText(newText.join(''));
    props.showAlert("Converted to togglecase","success");
  }

  const clearText = () => {
    setText('');
    props.showAlert("Clear text","success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value); 
  }

  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={upperCase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={lowerCase}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={titleCase}>Convert to Titlecase</button>
        <button className="btn btn-primary mx-2" onClick={toggleCase}>Convert to Togglecase</button>
        <button className="btn btn-primary" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something in textbox to preview the text'}</p>
    </div>
    </>
  )
}
  