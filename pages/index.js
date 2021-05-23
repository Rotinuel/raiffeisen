import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/Home/MainBanner';
import OTPBox from '../components/Layouts/otp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';

class Index extends Component {
    render() {
        return (
            <>
            <Router>
            <Navbar />
                <Switch>
                    <Route exact path="/">
                        <MainBanner />
                    </Route>
                    <Route path="/OTPBox">
                        <OTPBox/>
                    </Route>
                </Switch>
            </Router>
                

            
            </>
        );
    }
}

export default Index;