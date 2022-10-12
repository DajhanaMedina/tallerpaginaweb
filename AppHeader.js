import React, {Component} from "react";

import pizza from "../images/perfil.jpg";

import logo from "../images/logo.jpg";

class AppHeader extends Component {

    render(){
        return(            
        <header 
            id="hd" 
            style={{
                backgroundColor: "#d582fa",
                border: "2px solid purple",
                height: "100%",
                width: "100%",
            }}>

                <ul style={{
                    fontWeight:"600px",
                    fontSize:"20px",
                    marginTop:"3%",
                    fontSize:"10px"
                }}>

                    <a href="CLASS" style={{ color: "#000000 ",  textDecorationLine:'none', margin:"10px"}}>
                        <b>INICIO</b></a>&nbsp;

                    <a href="PUBLICIDAD" style={{ color: "#000000 ", fontfamily: "calibri-bold", fontfamily: 'Times New Roman, Times, serif',  textDecorationLine:'none', margin:"10px" }}>
                        <b>PUBLICIDAD</b></a>&nbsp;

                    <a href="CONTACTO" style={{ color: "#000000",  textDecorationLine:'none', margin:"10px" }}>
                        <b>CONTACTO</b></a>&nbsp;

                    <a href="GALERIA" style={{ color: "#000000 ",  textDecorationLine:'none', margin:"10px" }} >
                        <b>GALERIA</b></a>&nbsp;

                    <a href="PRODUCTOS" style={{ color: "#000000 ",  textDecorationLine:'none', margin:"10px" }}>
                        <b>PRODUCTOS</b></a>

                    

                    <span class="icon" style={{marginLeft:"25%"}}><i class="Busqueda"></i></span>

                    <input type="Busqueda" id="Busqueda" placeholder="Busqueda" /> 

                <figure style={{marginLeft: "90%", marginTop:"-40px"}}>
 
                    <img 

                        src={logo}
                        style={{
                            marginLeft: "10%",    
                            width:"55px",
                            height:"55px"   
                        }}   
                    />                          
                    <figcaption>DAJHANA MEDINA</figcaption>

                </figure> 
                <figure style={{marginLeft: "70%", marginTop:"-90px"}}>
                    <img 
                        src={logo}
                        style={{
                            marginLeft: "40%",    
                            width:"70px",
                            height:"70px"  

                        }} 

                    />  
                </figure>                    
                </ul>                                
        </header>
        );
    }
}   

export default AppHeader;