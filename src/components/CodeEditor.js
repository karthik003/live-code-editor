import React, { useState,useEffect,Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

function CodeEditor(props) {
const {language,displayName,value,onChange}=props;
const [codeValue, setCodeValue]=useState(0);
useEffect(() => {
    // console.log("value:",value)
  });
const handleChange=(editor,data,value)=>{
    onChange(value)
}
    return (
        <div style={{height:"100vh",backgroundColor:"black",float:"left",color:"white",width:"40%",border:"1px solid #373737",textAlign:"left"}}>
            <div style={{textAlign:"center"}}> {displayName} Editor</div>

                <CodeMirror
                    onBeforeChange={handleChange}
                    value={value}
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        theme: 'material',
                        lineNumbers: true
                    }}
                />
        </div>
    )
}

export default CodeEditor