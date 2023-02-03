import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = () =>{
    return(
        <footer className="footer-half sub-bg">
            <div className="container">
            <div className="copyrights text-center mt-0">
                <p>
                © 2023 by Russell John Javier 
                </p>
            </div>
            </div>
        </footer>        
    )
}

export default Footer