import '../index.css';

const Header = () => {
    return (
        <header style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
            {/* Promotional bar removed as it conflicts with the "no white space" request, or should it be transparent? 
               User said "no white spaces at the top". I will keep the text but remove the background color. */}
            <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', color: '#fff', textAlign: 'center', padding: '10px', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px' }}>
                10% Off All Orders This Month. Get Your Free Home Transformation Plan Today.
            </div>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <img src="/logos/official-logo.png" alt="Orchard Windows" style={{ height: '80px', width: 'auto' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <a href="#contact" style={{ color: '#333', textDecoration: 'none', fontWeight: 600 }}>Contact</a>
                    <a href="#quote" className="btn-primary" style={{ padding: '10px 25px', fontSize: '1rem' }}>
                        Book My Free Design Session
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
