import React, { Component } from 'react';


export default class Container extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='app-container'>
                <div id='container-body'>{this.props.children} </div>
                <footer className="footer w-full m-t hidden-xs">
                    <div className="container-fluid">
                        <div className='footer-inner bottom-left'>
                            <div className="left text-xs-left">
                                <a className="footer-link right" href="http://hci.usask.ca/" > <img src="assets/img/interaction_lab.gif" height="30" style={{ 'margin': '5px 0px' }} /></a>
                                <a className="footer-link right" href="http://www.10wheatgenomes.com/"> <img src="assets/img/wheat_logo.jpg" height="30" style={{ 'margin': '5px 0px' }} /></a>
                            </div>
                        </div>
                        <div className='footer-inner text-right bottom-right'>
                            <a className="footer-link"
                                href="mailto:venkat.bandi@usask.ca?subject=10+ Wheat Genomes Visualizer&amp;body=Please%20Fill%20">
                                Contact Us </a>
                            <span className='pole-holder'>|</span>
                            <a href="https://www.usask.ca/">University of Saskatchewan</a>
                            <span className='pole-holder'>|</span>
                            <a href="https://www.usask.ca/disclaimer.php">Disclaimer</a>
                            <span className='pole-holder'>|</span>
                            <a href="https://www.usask.ca/privacy.php">Privacy</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}