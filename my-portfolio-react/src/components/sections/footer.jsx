import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = () =>{
    return(
        <footer className="footer-half sub-bg">
            <div className="container">
            <div className="copyrights d-flex justify-content-between mt-0">
                <div className="px-5">
                    <p>
                    © 2023 Russell John Javier 
                    </p>
                </div>
                <div className="px-5">
                    <a href="https://russelljohnjavier.com/old-portfolio" className="tey-footer-link"> Old Portfolio &gt;</a>
                </div>
            </div>
            </div>
        </footer>        
    )
}

export default Footer