import { FC } from 'react';

interface PrivacyPolicyProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyPolicy: FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 1100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
        }}>
            <div style={{
                backgroundColor: '#fff',
                padding: '40px',
                borderRadius: '8px',
                maxWidth: '800px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative'
            }}>
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    fontSize: '1.5rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#333'
                }}>&times;</button>

                <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Privacy Policy</h2>

                <div style={{ lineHeight: '1.6', color: '#555' }}>
                    <h3>1. Introduction</h3>
                    <p>Orchard Home Improvements ("we", "our", "us") respects your privacy and is committed to protecting your personal data.</p>

                    <h3>2. Data We Collect</h3>
                    <p>We may collect, use, store and transfer different kinds of personal data about you, including Identity Data (first name, last name), Contact Data (email address, telephone number, address), and Technical Data (IP address, browser type).</p>

                    <h3>3. How We Use Your Data</h3>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you, and to communicate with you about our services.</p>

                    <h3>4. Data Security</h3>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.</p>

                    <h3>5. Your Legal Rights</h3>
                    <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>

                    <h3>6. Contact Us</h3>
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact us at sales@orchardwindows.co.uk.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
