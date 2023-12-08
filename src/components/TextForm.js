import React,{useState} from 'react'
import * as Icon from 'react-bootstrap-icons';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("upperCase was Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLoClick = ()=>{
        //console.log("upperCase was Clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleclearClick = ()=>{
       
        let newText='';
        setText(newText);
        props.showAlert("The Texts are Cleared","success")
    }
    const handleOnChange = (event)=>{
       // console.log("onchange");
        setText(event.target.value);
    }
    const handlecopyClick=()=>{
        let newtext=document.getElementById("myBox")
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Your Text has coppied","success")
    }
    const handleExtraSpaces=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Your Extra space is removed","success")
    }
    const handleSpeak=()=>{
        let newtext=new SpeechSynthesisUtterance();
        newtext.text = text;
        window.speechSynthesis.speak(newtext);
    }
    const handleDownload=()=>{
        let newtext=document.createElement("a");
        const file = new Blob([text], {
            type: "text/plain"
          });
          newtext.href = URL.createObjectURL(file);
          newtext.download = "myFile.txt";
          newtext.click();
          props.showAlert("Your Text is Downloded","success")
    }
    

    const [text,setText]= useState('');
   
    //text="ddwfwfw"; wrong way to change state
    //setText("Enter Text here"); correct way to change
  return (
    <>
<div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
<h1>{props.heading} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon.MegaphoneFill onClick={handleSpeak}></Icon.MegaphoneFill></h1>

<div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'light',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="9"></textarea>
</div>
<button className="btn btn-info mx-4" onClick={handleUpClick}><Icon.ChevronCompactUp></Icon.ChevronCompactUp> UpperCase</button>
<button className="btn btn-primary mx-4" onClick={handleLoClick}><Icon.ChevronCompactDown></Icon.ChevronCompactDown> LowerCase</button>
<button className="btn btn-info mx-4" onClick={handlecopyClick}><Icon.Clipboard2></Icon.Clipboard2> Coppy</button>
<button className="btn btn-primary mx-4" onClick={handleExtraSpaces}><Icon.DistributeHorizontal></Icon.DistributeHorizontal> RemoveExtraSpace</button>
<button className="btn btn-info mx-3" onClick={handleDownload}><Icon.Download></Icon.Download> Download</button>
<button className="btn btn-primary mx-4" onClick={handleclearClick}><Icon.XCircleFill></Icon.XCircleFill> ClearText</button>


</div>
<div className='container my-5' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes Read</p>

    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something in text mode above to preview it here"}</p>
</div>
</>
  )
}
