const Footer = ({ onOpenPrivacy }: { onOpenPrivacy: () => void }) => {
    return (
        <footer id="contact" style={{ backgroundColor: '#2c3e50', color: '#fff', padding: '60px 0', fontSize: '0.9rem' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
                    <div style={{ maxWidth: '300px' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Orchard Windows</h4>
                        <p>Unit 6A, Tinwell Business Park, Steadfold Lane, Stamford, Lincolnshire, PE9 3UN</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Contact</h4>
                        <p>Email: <a href="mailto:sales@orchardwindows.co.uk" style={{ textDecoration: 'underline', color: '#fff' }}>sales@orchardwindows.co.uk</a></p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Opening Hours</h4>
                        <p>Monday to Friday: 8am – 5pm</p>
                        <p>Saturday: 9am – 2pm</p>
                    </div>
                </div>
                <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', color: '#bdc3c7' }}>
                    &copy; 2025 Orchard Windows. All rights reserved. <span style={{ margin: '0 10px' }}>|</span> <a href="#" onClick={(e) => { e.preventDefault(); onOpenPrivacy(); }} style={{ color: '#bdc3c7', textDecoration: 'underline' }}>Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
