import React from 'react';
import "./Footer.css";


const Footer = () => {
    return(
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} Glitter Gymnasts | Owned and designed by Alece
                        
                    </p>
                </div>
               
            </div>
        </div>
    )
}

export default Footer;