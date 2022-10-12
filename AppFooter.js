import React, {Component} from "react";




class AppFooter extends Component {

    render(){

        return(

            <footer

            style={{
                height:"280px",
                backgroundColor: "#d582fa",
                textAlign: "right",
                fontSize: "20px",
            }}
        >

        <div style = { {
            marginTop:"55%", 
            marginRight: "30px",
            }}
        >
        <p>

            <br></br>

            <h4>Telefono: 8567896</h4>

            <h4>Correo electronico: damedina76@uan.edu.co</h4>

            <h4>Ciudad: Bogota, Colombia </h4>

            <br></br>
        </p> 
        </div>
        </footer>
        );

    

    }}




export default AppFooter;



