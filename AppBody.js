import React, {Component} from "react";
import pizza from "../images/pizza.jpg";
import curso from "../images/curso.jpg";
import video from "../images/video.mp4";

class AppBody extends Component {
    
    render(){
        return(
            <body>
                <div 
                    style={{
                        backgroundColor: "#d5ace8",
                        height: "130%",
                        width: "100%",
                        position: "absolute",   
                    }}>
            
                <h1 class="titulobody" 
                    style={{
                        fontfamily: 'Times New Roman, Times, serif',
                        color: "#000000",
                        fontfamily: "calibri-bold",
                        textAlign: "center"
                    }}>
                   CURSO DE COMIDA RAPIDA<br></br><br></br>
                </h1>
            <div
                style={{ 
                        float: "left",
                        backgroundColor: "#e7cef2", 
                        height: "65%",
                        width: "40%",
                        marginLeft: "3%",
                        border: "1px solid purple",
                        }}>

                 <h1 class="tituloimagen" 
                    style={{
                        fontfamily: 'Times New Roman, Times, serif',
                        color: "#000000",
                        fontfamily: "calibri-bold",
                        textAlign: "center"
                    }}>
                    ¡REGISTARTE YA!<br></br>
                </h1>
               
                <figure style={{marginLeft: "-8%", marginTop:"10%"}}>
                    <img 
                        src={curso}
                        style={{
                            float: "left",
                            marginLeft: "15%",  
                            width:"200px",
                            height:"300px"                         
                        }} 
                    />  
                </figure>
                <figure style={{marginLeft: "50%", marginTop:"10%"}}>

                    <img 
                        src={pizza}
                        style={{
                            float: "left",
                            marginLeft: "15%",  
                            width:"200px",
                            height:"300px" 
                        }} 
                    />  
                </figure> 
               
            </div>
            <div 
                style={{ 
                    float: "left",
                    backgroundColor: "#e7cef2", 
                    height: "65%",
                    width: "40%",
                    marginLeft: "14%",
                    border: "1px solid purple",
                    }}>

                <h1 class="titulovideo" 
                    style={{
                        fontfamily: 'Times New Roman, Times, serif',
                        color: "#000000",
                        fontfamily: "calibri-bold",
                        textAlign: "center"
                    }}>
                    APRENDE CON NOSOTROS<br></br>
                </h1>

                    <figure style={{marginLeft: "10%", marginTop: "15%"}}>
                    <video
                        src={video}
                        autoplay="true" muted="true" loop="true" 
                        style={{
                            width: "100%",                       
                        }} 
                    />  
                </figure>
            </div>              
        </div>
            </body>
        );
    }}

export default AppBody;