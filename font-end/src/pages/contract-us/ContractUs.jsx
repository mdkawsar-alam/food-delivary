import { useState } from 'react';
import './contractUs.css';

const ContractUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        terms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation and submit form data
        if (formData.terms) {
            alert('Form submitted successfully');
            // Here you would typically handle form submission,
            // such as sending data to a backend server
        } else {
            alert('Please accept the terms and conditions');
        }
    };

    return (
        <form className="contract-form" onSubmit={handleSubmit}>
            <h2>Delivery Contract Agreement</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
        
            <div className="form-group">
                <label htmlFor="address">message:</label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
         
         
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContractUs;
