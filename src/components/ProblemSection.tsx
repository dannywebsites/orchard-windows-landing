const ProblemSection = () => {
    const problems = [
        {
            title: "Conservatory Too Hot/Cold",
            text: "Your conservatory is freezing in winter and boiling in summer. You haven’t sat in it since September. That’s not a room. That’s wasted space you already paid for.",
            image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80", // Winter/Cold vibe
            color: "#e74c3c"
        },
        {
            title: "Rotting Frames",
            text: "Your wooden window frames are rotting at the corners. Every two years it’s the same thing. Sand. Prime. Paint. And you’re terrified that modern replacements will look cheap against your stone.",
            image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=800&q=80", // Window frame
            color: "#e67e22"
        },
        {
            title: "Misted Windows",
            text: "Your windows are misted between the panes. Your energy bills keep climbing. And your locks are the same ones that were fitted twenty years ago.",
            image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80", // Rain on glass
            color: "#3498db"
        },

    ];

    return (
        <section className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#2c3e50' }}>Does any of this sound familiar?</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {problems.map((problem, index) => (
                        <div key={index} style={{
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                            transition: 'transform 0.3s ease',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={problem.image}
                                    alt={problem.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '25px', flex: 1, backgroundColor: '#fff' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#b0976d', textTransform: 'uppercase', fontWeight: 700 }}>
                                    {problem.title}
                                </h3>
                                <p style={{ color: '#666', fontSize: '0.95rem' }}>{problem.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px', fontSize: '1.5rem', fontWeight: 600, color: '#2c3e50', fontFamily: 'var(--font-heading)' }}>
                    We get it. That’s why we do things differently.
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
