import React,{useState,useEffect} from 'react'
import ReactSrcDocIframe from 'react-srcdoc-iframe';
function LiveView(props) {
    const [code,setCode]= useState('')
    useEffect(() => {
        console.log("srcDoc",props.srcDoc)
    }, [])
    return (
        <div style={{height:"100vh",float:"left",color:"white",width:"40%",border:"1px solid #373737"}}>
            <div style={{textAlign:"center",backgroundColor:"black"}}> Live View</div>
            <br />
            {/* <iframe 
            srcDoc={code}
            // srcDoc="<h1>hello</h1>"
            id="live-view"
            title="Live-View" 
            style={{backgroundColor:"white",border:'1px solid red',width:"99%",height:"96%"}}>
                Hello   
            </iframe> */}
            <iframe
                srcDoc={props.srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                style={{width:"99%",height:"96%"}}
                />
        </div>
    )
}

export default LiveView
