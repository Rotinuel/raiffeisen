import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/Home/MainBanner';
import OTPBox from '../components/Layouts/otp';


class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <MainBanner />
                <OTPBox/>           
            </>
        );
    }
}

export default Index;