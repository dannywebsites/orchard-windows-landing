
const RecentProjects = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#2c3e50' }}>Our Recent Projects</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gridAutoRows: '250px',
                    gap: '20px'
                }}>
                    {/* Item 1: Large Feature */}
                    <div style={{
                        gridColumn: 'span 2',
                        gridRow: 'span 2',
                        backgroundColor: '#e0e0e0',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")', // Fallback real image
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', color: '#fff' }}>
                            <h3 style={{ margin: 0 }}>Modern Residential</h3>
                            <p style={{ margin: 0, fontSize: '0.9rem' }}>Full house window replacement</p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div style={{
                        backgroundColor: '#d1d1d1',
                        borderRadius: '8px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>

                    {/* Item 3 */}
                    <div style={{
                        backgroundColor: '#c2c2c2',
                        borderRadius: '8px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1600566752355-35792bedcfe1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>

                    {/* Item 4 */}
                    <div style={{
                        gridColumn: 'span 2',
                        backgroundColor: '#b3b3b3',
                        borderRadius: '8px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>

                    {/* Item 5 */}
                    <div style={{
                        backgroundColor: '#a4a4a4',
                        borderRadius: '8px',
                        backgroundImage: 'url("https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px', color: '#7f8c8d' }}>
                    <p></p>
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
