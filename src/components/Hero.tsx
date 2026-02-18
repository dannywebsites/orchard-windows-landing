import '../index.css';


const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            padding: '180px 0 100px 0',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#2c3e50', // Fallback
            minHeight: '75vh', // Push Trust Marks down but keep above fold
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px', textWrap: 'balance' }}>
                    Windows, Doors & Creative Living&nbsp;Spaces
                </h1>
                <p style={{ fontSize: '1.25rem', maxWidth: '750px', margin: '0 auto 30px', opacity: 0.9 }}>
                    Trusted by homeowners across Stamford and surrounding areas for over&nbsp;25&nbsp;years
                </p>

                <div style={{ marginBottom: '10px' }}>
                    <a href="#quote" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
                        Book My Free Design Session
                    </a>
                </div>
            </div>
        </section >
    );
};

export default Hero;
