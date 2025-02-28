// src/components/Footer.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';
import PopupCard from '../popupcard/PopupCard';

const Footer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef(null);
    const [visitorCount, setVisitorCount] = useState(0); // Visitor Counter State

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCreditClick = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    // Fetch visitor count from Netlify function
    useEffect(() => {
        fetch("/.netlify/functions/visitorCounter")
            .then(response => response.json())
            .then(data => setVisitorCount(data.count))
            .catch(error => console.error("Error fetching visitor count:", error));
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                closePopup();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <span className="footer-emoji animated-emoji">😜</span>
                </div>
                <div className="footer-center">
                    <p>&copy; 2024 Vidhaan Viswas. All Rights Reserved.</p>
                    <p className="visitor-counter">👀 Visitors: {visitorCount}</p> {/* Display Visitor Counter */}
                </div>
                <div className="footer-right">
                    <div className="tooltip">
                        <button className="scroll-top-btn" onClick={scrollToTop} title="Go to Top">▲</button>
                        <span className="tooltip-text">Go to Top</span>
                    </div>
                    <p>
                        Theme by <span className="credit-text" onClick={handleCreditClick}>GregSithole!</span>
                    </p>
                </div>
            </div>
            {isPopupOpen && (
                <div ref={popupRef}>
                    <PopupCard onClose={closePopup} />
                </div>
            )}
        </footer>
    );
};

export default Footer;
