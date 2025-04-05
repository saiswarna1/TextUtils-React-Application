import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('enter text')
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Upper Case Converted Successfully","success")
    }
    const handleonChange = (e) => {
        setText(e.target.value)
    }
    const handlelowClick = () => {
        let newText2 = text.toLowerCase();
        setText(newText2);
    props.showAlert("Lower Case Converted Successfully","success")
    }
    const handleclear = () => {
        setText("");
        props.showAlert("Cleared Text Successfully","success")
    }

    const handleCopy = () => {
        let op=document.getElementById("mybox")
        op.select();
        navigator.clipboard.writeText(op.value);
        props.showAlert("Copied Text Successfully","success")
    }
    // Calcul
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    return (
        <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{color:props.mode==='dark'?'white':'grey'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea 
                    className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}
                    value={text} 
                    onChange={handleonChange} 
                    id="mybox" 
                    rows="8"
                    // style={{backgroundColor:props.mode==='dark'?'#2b2b2b':'white}}
                    style={{backgroundColor:props.mode==='dark'?'#2b2b2b':'white'
                    }}
                ></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handlelowClick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleclear}>
                Clear Text
            </button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>
                Copy Text
            </button>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2><b>Your text summary</b></h2>
                <p>{wordCount} words and {text.length} characters</p>
                <p>{0.008 * wordCount} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </div>
    )
}