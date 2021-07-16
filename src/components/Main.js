import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import CodeEditor from './CodeEditor';
import LiveView from './LiveView';
import useLocalStorage from '../hooks/useLocalStorage'
import './Main.css'
function Main() {
  const [lang, setLang] = useState('')
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  const [fileType, setFileType] = useState('')
  useEffect(() => {
    const fileName=localStorage.getItem("file");
    setFileType(fileName)
    console.log("file:",fileType)
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
  }, [html, css, js,fileType])

    
const handleBgColor=(id)=>{
  if(id===1){
      document.getElementById(2).style.backgroundColor="";
      document.getElementById(3).style.backgroundColor="";
      document.getElementById(2).style.color="";
      document.getElementById(3).style.color="";
  }
  else if(id===2){
      document.getElementById(1).style.backgroundColor="";
      document.getElementById(3).style.backgroundColor="";
      document.getElementById(1).style.color="";
      document.getElementById(3).style.color="";

  }
  else if(id===3){
      document.getElementById(2).style.backgroundColor="";
      document.getElementById(1).style.backgroundColor="";
      document.getElementById(2).style.color="";
      document.getElementById(1).style.color="";
  }
}

const handleClick=(id)=>{
  handleBgColor(id);
  document.getElementById(id).style.backgroundColor="#373737";
  document.getElementById(id).style.color="white";
  const file = document.getElementById(id).innerHTML;
  setFileType(file.substring(6))
  localStorage.setItem("file",file.substring(6))
}
  return (
    <div className="App">
      <Navbar />
      <div style={{height:"100vh",backgroundColor:"black",float:"left",color:"white",width:"19.6%",border:"1px solid #373737"}}>
            File Explorer<br /><br />
            <div className="file-names">
                <div className="file" id="1" onClick={()=>handleClick(1)}>index.html</div>
                <div className="file" id="2" onClick={()=>handleClick(2)}>index.css</div>
                <div className="file" id="3" onClick={()=>handleClick(3)}>index.js</div>
            </div>
        </div>
        
      {fileType==="html" && 
        <CodeEditor language="xml" value={html}  onChange={setHtml} displayName="HTML" />
      }
      {fileType==="css" && 
        <CodeEditor language="css" value={css}  onChange={setCss} displayName="CSS" />
      }
      {fileType==="js" && 
        <CodeEditor language="javascript" value={js}  onChange={setJs} displayName="JS" />
      }
      <LiveView srcDoc={srcDoc}/>

    </div>
  );
}

export default Main;
