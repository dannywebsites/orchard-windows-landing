
const TrustMarks = () => {
    const trustMarks = [
        { name: "TrustMark", src: "/logos/edited-logo.png", href: "https://www.trustmark.org.uk/" },
        { name: "InstallSure", src: "/logos/installsure.png", href: "https://www.installsure.co.uk/" },
        { name: "BFRC", src: "/logos/bfrc.png", height: '45px', href: "https://www.bfrc.org/" },
        { name: "FENSA", src: "/logos/fensa-new.png", href: "https://www.fensa.org.uk/" }
    ];

    return (
        <section style={{ backgroundColor: '#f8f9fa', padding: '40px 0', borderBottom: '1px solid #e9ecef' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '60px' }}>
                {trustMarks.map((mark, index) => (
                    <img
                        key={index}
                        src={mark.src}
                        alt={mark.name}
                        style={{
                            height: mark.height || (mark.name === 'TrustMark' ? '150px' : '70px'),
                            width: 'auto',
                            objectFit: 'contain',
                            // filter: 'grayscale(100%) opacity(0.8)', // Removed as requested
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => {
                            // e.currentTarget.style.filter = 'grayscale(0%) opacity(1)';
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseOut={(e) => {
                            // e.currentTarget.style.filter = 'grayscale(100%) opacity(0.8)';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default TrustMarks;
