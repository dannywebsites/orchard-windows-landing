import { FC } from 'react';

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
            <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
            <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
            <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.734 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
            <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.424 44.599 -10.174 45.789 L -6.704 42.319 C -8.804 40.359 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
        </g>
    </svg>
);

const StarRating = () => (
    <div style={{ display: 'flex', gap: '2px', marginBottom: '10px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} style={{ color: '#FBBC05', fontSize: '1.2rem' }}>★</span>
        ))}
    </div>
);

const Testimonials: FC = () => {
    const reviews = [
        {
            text: "This new space has changed the way we live. Over the 4 months it took to build the extension and complete all the works, Orchard were outstanding.",
            author: "Orchard Customer",
            source: "Google Review"
        },
        {
            text: "After losing money to a local conman I was hesitant. Orchard put my mind at ease from the beginning and made the process smooth.",
            author: "Jaime T.",
            source: "Google Review"
        },
        {
            text: "The best fitted windows ever. Our bungalow is so quiet you cannot hear the wind, rain, or traffic outside.",
            author: "John & Jill M.",
            source: "Google Review"
        },
        {
            text: "Absolutely delighted with our new conservatory. The team was professional, polite, and kept everything tidy throughout the build.",
            author: "Sarah P.",
            source: "Google Review"
        },
        {
            text: "From the initial quote to the final installation, everything was handled with great care. Highly recommend Orchard for any home improvements.",
            author: "David L.",
            source: "Google Review"
        },
        {
            text: "Excellent service and high-quality windows. The house feels much warmer already. Thank you to the whole team!",
            author: "Emma R.",
            source: "Google Review"
        },
        {
            text: "Professional, friendly, and efficient. The installers arrived on time and did a fantastic job replacing our old drafty doors.",
            author: "Mark W.",
            source: "Google Review"
        },
        {
            text: "We are so pleased with our new orangery. It really has become the heart of our home. Great workmanship.",
            author: "Lisa & Tom",
            source: "Google Review"
        },
        {
            text: "Honest advice and no pushy sales tactics. Just a great job done at a fair price. Will definitely use again.",
            author: "Robert B.",
            source: "Google Review"
        },
        {
            text: "The quality of the doors is amazing. They look great and feel very secure. Installation was quick and mess-free.",
            author: "Karen S.",
            source: "Google Review"
        },
        {
            text: "Big thanks to the installation team who went above and beyond. They even helped move some heavy furniture back for us.",
            author: "Peter H.",
            source: "Google Review"
        },
        {
            text: "Replaced all our windows and the difference is night and day. No more noise, no more drafts. superb job.",
            author: "Susan K.",
            source: "Google Review"
        },
        {
            text: "Cannot fault the service. From the office staff to the fitters, everyone was polite and helpful. 5 stars.",
            author: "James D.",
            source: "Google Review"
        },
        {
            text: "A truly professional company. They turned up when they said they would and finished the job to a very high standard.",
            author: "Richard F.",
            source: "Google Review"
        },
        {
            text: "Love our new composite door. It has really updated the look of the front of our house. great choice of styles too.",
            author: "Michelle G.",
            source: "Google Review"
        }
    ];

    return (
        <section className="section-padding" style={{ backgroundColor: '#f9f9f9' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#2c3e50' }}>What our customers say</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {reviews.map((review, index) => (
                        <div key={index} style={{
                            padding: '30px',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    {/* Placeholder Avatar */}
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#b0976d', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                        {review.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{review.author}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#7f8c8d' }}>{review.source}</div>
                                    </div>
                                </div>
                                <GoogleIcon />
                            </div>

                            <StarRating />

                            <p style={{ fontStyle: 'normal', color: '#555', flex: 1, fontSize: '0.95rem', lineHeight: '1.6' }}>"{review.text}"</p>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <a href="#quote" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem', backgroundColor: '#e67e22' }}>
                        Get Your Free Home Transformation Plan
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
