import React from 'react'
import Navbar from "react-bootstrap/Navbar";


function About() {
    return (
        <>
        <Navbar.Brand href="/" className="logo">
            Kusama <span>calculator</span>
          </Navbar.Brand>
        <div>
            <h1>About kusama Calculator:</h1>
            <h4>KusamCalculator.com has a simple aim: To satisfy your Cardano Kusama cryptocurrency calculation needs whilst providing a clean design and user experience. The site is a work in progress built to serve the Cardano community. We aim to continue adding new, useful features to the calculators in the future, so don't forget to check back soon!</h4>
            <div>
                <h4>

                The current incarnation of the site includes two calculators:</h4>
                <p>1.Kusama Price Conversion Calculator</p>
                <p>2.Cardano Kusama Staking Calculator</p>

                
            </div>
            <div>
                <h3>1) Price Conversion Calculator</h3>
                <h4>Displays the latest price of Kusama supporting convertions from Kusama into Fiat or other Crytpocurrencies such as Bitcoin and Ethereum. The price calculator pulls the price data from the public CoinGecko.com API every 4 seconds keeping you up to date.</h4>


                <h3>2) Cardano Kusama Staking Calculator</h3>
                <h5>The Cardano project has yet to announce the offical specification and formulas which will be used to calculate Kusama staking rewards. The calculator we currently present is therefore a demonstrative/educational calculator only, which fills in the currently unknown with sensible default parameter values aiming to provide a decent attempt at what kusama rewards one could possibly expect.
Once Cardano release the final details regarding how staking works, we will update the staking calculator to reflect the final formula, providing greater accuracy.
The calculator, features, and formula used was heavily inpired by the work from Emergo employee and</h5>


<h3>How the site works:</h3>
<h5>None of the data you enter on any of the calculators ever leaves your computer as all calculations are performed on the client side (inside your browser). The persistant state of what you have entered is stored using the browsers 'localStorage' which is only available to your machine and not to us.</h5>
            </div>
       
        </div>
        </>
        
    )
}

export default About
