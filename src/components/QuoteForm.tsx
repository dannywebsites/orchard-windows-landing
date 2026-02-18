import { useState } from 'react';

const QuoteForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        phone: '',
        postcode: '',
        interest: '',
        marketingConsent: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.marketingConsent) {
            alert("Please confirm you are happy for us to contact you.");
            return;
        }

        try {
            const response = await fetch('https://services.leadconnectorhq.com/hooks/iLZ1Reez9OCIdXjxTjGp/webhook-trigger/39afb292-0a58-44f1-a8a6-8d1224ab68cb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you! We will call you back within 24 hours.');
                setFormData({
                    firstName: '',
                    phone: '',
                    postcode: '',
                    interest: '',
                    marketingConsent: false
                });
            } else {
                alert('There was an error submitting your request. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your request. Please try again.');
        }
    };

    return (
        <section id="quote" className="section-padding" style={{ backgroundColor: '#fff', scrollMarginTop: '60px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '20px' }}>Get your free home transformation plan</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Tell us what you need. We’ll call you back within 24 hours to arrange your free home survey.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="firstName" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>First Name *</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="postcode" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Postcode *</label>
                        <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            required
                            value={formData.postcode}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
                        />
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <label htmlFor="interest" style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>What are you interested in? *</label>
                        <select
                            id="interest"
                            name="interest"
                            required
                            value={formData.interest}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', backgroundColor: '#fff' }}
                        >
                            <option value="">Please select...</option>
                            <option value="Windows">Windows</option>
                            <option value="Doors">Doors</option>
                            <option value="Windows & Doors">Windows & Doors</option>
                            <option value="Conservatory Roof Conversion">Conservatory Roof Conversion</option>
                            <option value="New Conservatory">New Conservatory</option>
                            <option value="Heritage / Conservation Windows">Heritage / Conservation Windows</option>
                            <option value="Not sure yet">Not sure yet</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <input
                            type="checkbox"
                            id="marketingConsent"
                            name="marketingConsent"
                            checked={formData.marketingConsent}
                            onChange={handleChange}
                            style={{ marginTop: '5px', transform: 'scale(1.2)' }}
                        />
                        <label htmlFor="marketingConsent" style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.4' }}>
                            I agree to receiving information via SMS and calls from us.
                        </label>
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.2rem' }}>
                        Book My Free Design Session
                    </button>
                </form>
            </div>
        </section>
    );
};

export default QuoteForm;
