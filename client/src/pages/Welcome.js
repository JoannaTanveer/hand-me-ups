import React from 'react';
import { Redirect } from 'react-router-dom';
import './styles.css';

import Login from '../components/Login';

import API from '../utils/API';

function Welcome() {
    if (API.getCurrentUser()) {
        return <Redirect to={'/Members'} />;
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Hand-Me-Ups</h1>
            </div>
            <div id="lego"></div>
            <div id="stripe"></div>
            <div id="grid-one"></div>
            <div id="grid-two">
                <h1>Connect</h1>

                <p id="p1">
                    Join local families and help your child learn about
                    responsibility, genorosity and giving. Donate or recieve
                    toys, clothing and furniture from a family in your community
                    and give these items a second life.
                </p>
            </div>
            <div id="grid-three">
                <h1>Donate and Recieve</h1>

                <p id="p1">
                    Create an account and sign up to recieve and donate toys,
                    furniture or clothing. Based on your childrens age, gender
                    preference and items to be donated or recieved you can
                    connect with families in your community that fit the needs
                    of your child. Let the toys, clothing and furniture that
                    your child no longer uses have a second chance to bring joy
                    to a child or recieve items that your child will love.
                </p>
            </div>
            <Login />
        </div>
    );
}

export default Welcome;
