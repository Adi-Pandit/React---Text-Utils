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
    <div className="container">
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={upperCase}>Convert to Uppercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={lowerCase}>Convert to Lowercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={titleCase}>Convert to Titlecase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={toggleCase}>Convert to Togglecase</button>
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={clearText}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}
  