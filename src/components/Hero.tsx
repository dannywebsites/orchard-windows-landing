import '../index.css';

const Hero = () => {
    const trustMarks = [
        { name: "FENSA", src: "https://logo.clearbit.com/fensa.co.uk" },
        { name: "TrustMark", src: "https://logo.clearbit.com/trustmark.org.uk" },
        { name: "InstallSure", src: "https://logo.clearbit.com/installsure.co.uk" },
        { name: "BFRC", src: "https://logo.clearbit.com/bfrc.org" }
    ];

    // Duplicate list for infinite scroll effect
    const carouselItems = [...trustMarks, ...trustMarks, ...trustMarks, ...trustMarks];

    return (
        <section style={{
            position: 'relative',
            padding: '120px 0',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: '#2c3e50', // Fallback
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden'
        }}>
            <div className="container">
                <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
                    Windows. Doors. Conservatories.<br />Fitted Right Since 2001.
                </h1>
                <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 30px', opacity: 0.9 }}>
                    Get a free quote and a fixed price from Stamford’s most trusted home improvement team.
                </p>



                <div style={{ marginBottom: '80px' }}>
                    <a href="#quote" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
                        Get Your Free Quote
                    </a>
                </div>

                {/* Carousel Container */}
                <div className="carousel-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="carousel-track">
                        {carouselItems.map((item, index) => (
                            <div key={index} className="carousel-item" style={{ margin: '0 30px', display: 'flex', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        style={{
                                            height: '60px',
                                            width: 'auto',
                                            filter: 'brightness(0) invert(1)',
                                            opacity: 0.9,
                                            objectFit: 'contain'
                                        }}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                            (e.target as HTMLImageElement).nextElementSibling?.removeAttribute('hidden');
                                        }}
                                    />
                                    <span hidden style={{ fontSize: '1.2rem', fontWeight: 700 }}>{item.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
