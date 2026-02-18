import '../index.css';

const Header = () => {
    return (
        <header>
            <div style={{ backgroundColor: '#b0976d', color: '#fff', textAlign: 'center', padding: '10px', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.5px' }}>
                10% Off All Orders This Month. Get Your Free Quote Today.
            </div>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#333', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', lineHeight: 1.2 }}>
                        Orchard Windows
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#b0976d', fontWeight: 600, letterSpacing: '0.5px', marginTop: '2px' }}>
                        Premium Windows for The Shires
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <a href="#contact" style={{ color: '#333', textDecoration: 'none', fontWeight: 600 }}>Contact</a>
                    <a href="#quote" className="btn-primary">
                        Get Your Free Quote
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
