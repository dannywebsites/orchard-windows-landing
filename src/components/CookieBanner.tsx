import { useState, useEffect } from 'react';

const CookieBanner = ({ onOpenPrivacy }: { onOpenPrivacy: () => void }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '0',
            left: '0',
            width: '100%',
            backgroundColor: '#2c3e50',
            color: '#fff',
            padding: '20px',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
        }}>
            <div style={{ maxWidth: '800px', fontSize: '0.9rem' }}>
                We use cookies to improve your experience. By using our site, you agree to our use of cookies. <a href="#" style={{ textDecoration: 'underline', color: '#b0976d' }} onClick={(e) => { e.preventDefault(); onOpenPrivacy(); }}>Read our Privacy Policy</a>.
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleDecline} style={{
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    border: '1px solid #fff',
                    color: '#fff',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>
                    Decline
                </button>
                <button onClick={handleAccept} className="btn-primary" style={{
                    padding: '8px 24px',
                    fontSize: '0.9rem'
                }}>
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
