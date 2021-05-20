import React, { Component } from 'react';

class ContactInfoContent extends Component {
    render() {
        return (
            <div className="contact-info">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <span>Address</span>
                        27 Division St, New York, NY 10002, USA
                    </li>

                    <li>
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <span>Email</span> 
                        infohaiper@haiper.com <br />
                        fax@haiper.com
                    </li>

                    <li>
                        <div className="icon">
                            <i className="fas fa-phone-volume"></i>
                        </div>
                        <span>Phone</span> 
                        + (321) 984 754 <br />
                        +1-212-9876543
                    </li>
                </ul>
            </div>
        );
    }
}

export default ContactInfoContent;