const HowItWorks = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: '#f9f9f9' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#2c3e50' }}>Three steps. That’s it.</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#b0976d', marginBottom: '15px' }}>Step 1</div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Request your free quote.</h3>
                        <p>Fill in the form below. We’ll call you back within 24 hours to book your free home survey.</p>
                    </div>

                    <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#b0976d', marginBottom: '15px' }}>Step 2</div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Get honest advice and a fixed price.</h3>
                        <p>Mark visits your home. No scripts. No pressure. Just expert advice and a clear price on one page.</p>
                    </div>

                    <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#b0976d', marginBottom: '15px' }}>Step 3</div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>We transform your home.</h3>
                        <p>Our fitting teams handle everything. Clean, professional, and finished on time. Most customers say they wouldn’t have known we’d been here.</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <a href="#quote" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
                        Get your free home transformation plan
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
