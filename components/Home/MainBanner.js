import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="hero">
                            <div className="d-container">
                                
                                <div class="d-row">
                                    <div class="d-col d-first">
                                        <h1>E-banking connection</h1>
                                        <h3>Contract number</h3>
                                        <input type="text" />
                                        <p className="danger">Please enter your contract number.</p>
                                        <h5>Personal password</h5>
                                        <input type="text" /><br/>
                                        <input className="btn btn-dark" type="button" value="log in" /><br/>
                                        <a href="">Forgot your password</a><br/>
                                            
                                        <a className=""href="/">Do you need help during login?</a> <br/>
                                        <a className="btn btn-secondary" href="/">Is your Natel / PhotoTan not activated?</a>
                                        
                                     </div>

                                    <div className="d-col d-second">
                                        <h2>Maintenance work in e-banking on May 23, 2021</h2>
                                        <p>Unfortunately, you will not be able to use our e-banking service on Sunday 23 May 2021 from 12:00 to 18:30. We maintain our system to keep it running safely and reliably for you. Thank you for your understanding.</p>
                                    </div>     
                                
                                
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;