// src/components/PopupCard.jsx
import React from 'react';
import './PopupCard.css'; // Add styles for the popup
import creditImage from '../../assets/creditgithubss.png'; // Ensure this path is correct

const PopupCard = ({ onClose }) => {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-card" onClick={e => e.stopPropagation()}> {/* Prevent click from closing the popup */}
                <button className="close-btn" onClick={onClose}>✖</button>
                <h2>GregSithole</h2>
                <p>This website themes credit goes to this guy!</p>
                <img src={creditImage} alt="GitHub Profile Preview" className="popup-image" />
                <a href="https://github.com/GregSithole" target="_blank" rel="noopener noreferrer" className="visit-profile-btn">Visit Profile</a>
            </div>
        </div>
    );
};

export default PopupCard;
