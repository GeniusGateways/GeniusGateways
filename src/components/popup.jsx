import React, { useState, useEffect } from 'react';
import whatsappLogo from '../assets/what.png'; // ✅ Import WhatsApp logo

const Popup = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        const timer = setTimeout(() => setVisible(false), 10000);
        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    return (
        visible && (
            <div style={popupStyle}>
                <a href="https://wa.me/+923183561921" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    <img src={whatsappLogo} alt="WhatsApp" style={logoStyle} /> {/* ✅ Small WhatsApp Logo */}
                    WhatsApp
                </a>
            </div>
        )
    );
};

// ✅ Updated Styles
const popupStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25d366',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center', // ✅ Aligns the logo and text properly
};

const logoStyle = {
    width: '20px', // ✅ Small WhatsApp logo
    height: '20px',
    marginRight: '8px', // ✅ Space between logo and text
};

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    alignItems: 'center', // ✅ Aligns logo & text in a row
};

export default Popup;
