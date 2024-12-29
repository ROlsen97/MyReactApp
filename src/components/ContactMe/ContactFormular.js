import React, { useState } from 'react';

function ContactFormular() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Navn er påkrævet';
        if (!formData.email) {
            errors.email = 'Email er påkrævet';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email er ugyldig';
        }
        if (!formData.subject) errors.subject = 'Emne er påkrævet';
        if (!formData.message) errors.message = 'Besked er påkrævet';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            fetch(`${process.env.REACT_APP_API_URL}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then((response) => {
                if (!response.ok) {
                    console.log(response);
                    throw new Error('Network response was not ok');
                }
                console.log(response);
                return response;
            })
            .then((data) => {
                console.log('SUCCESS', data);
                setIsSubmitted(true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className="max-w-md p-4 mx-auto bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Kontakt mig</h2>
            {isSubmitted ? (
                <p className="text-green-500">Tak for din besked! Jeg vender tilbage hurtigst muligt.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Navn</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border border-gray-300 rounded"
                        />
                        {formErrors.name && <p className="text-sm text-red-500">{formErrors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border border-gray-300 rounded"
                        />
                        {formErrors.email && <p className="text-sm text-red-500">{formErrors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Emne</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border border-gray-300 rounded"
                        />
                        {formErrors.subject && <p className="text-sm text-red-500">{formErrors.subject}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Besked</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border border-gray-300 rounded"
                            rows="4"
                        ></textarea>
                        {formErrors.message && <p className="text-sm text-red-500">{formErrors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Send
                    </button>
                </form>
            )}
        </div>
    );
}

export default ContactFormular;