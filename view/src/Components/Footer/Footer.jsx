import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
    return (
        <footer className="footerBase">
            <div className="footer-content">
                <div className="intro">
                    <h3 className="font">EasyManage</h3>
                    <p>
                        EasyManage is an interactive application 
                        that helps you manage your inventory and boost your sales efficiently.
                    </p>
                </div>

                <div className="about">
                    <nav>
                        <Link to="#">About Us</Link>
                    </nav>
                </div>

                <div className="contactUs">
                    <nav>
                        <Link to="#">Contact Us</Link>
                    </nav>
                </div>
            </div>
            <hr className="footer-divider" />
            <div className="copyright">
                &copy; {new Date().getFullYear()} EasyManage. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
