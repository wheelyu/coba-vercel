import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
const contactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
        });
        
        const [submittedData, setSubmittedData] = useState([]);
        
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
            ...formData,
            [name]: value
            });
        };
        
        const handleSubmit = (e) => {
            e.preventDefault();
        
            // Tambahkan data yang disubmit ke dalam array submittedData
            setSubmittedData([...submittedData, formData]);
        
            // Reset form setelah submit
            setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
            });
        };
    return (
        <div>
            <Navbar active="Contact"/>
            <div className="container mx-auto px-4 py-10 h-screen pt-40 flex flex-row">
                <div className=" mx-auto">
                <h1 className="text-3xl  font-bold  mb-6 text-green">Contact Us</h1>
                <p className="text-2xl mb-6 w-96">We are here to help you, u can jump into those fields, and ask us anything</p>
                </div>
                {/* Form */}
                <form className="max-w-lg mx-auto bg-gradient-to-b from-green-700 to-blue-900 p-6 rounded-lg shadow-2xl w-full" onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-row">
                    <div>
                    <label htmlFor="firstName" className="block text-white font-bold mb-2">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                    <div>
                    <label htmlFor="lastName" className="block text-white font-bold mb-2 ml-4">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-4"
                    />
                    </div>
                    </div>

                    <div className="mb-4">
                    <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    <div className="mb-4">
                    <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    <div className="text-start">
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                        Submit
                    </button>
                    </div>
                </form>

                {/* Data yang sudah disubmit */}
                
            </div>
            {submittedData.length > 0 && (
                    <div className="mt-10 w-1/2 mx-auto py-5">
                    <h2 className="text-2xl font-bold text-center mb-4">Submitted Data</h2>
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200">Username</th>
                            <th className="py-2 px-4 bg-gray-200">Email</th>
                            <th className="py-2 px-4 bg-gray-200">Message</th>
                        </tr>
                        </thead>
                        <tbody>
                        {submittedData.map((data, index) => (
                            <tr key={index}>
                            <td className="border px-4 py-2">{data.firstName} {data.lastName}</td>
                            <td className="border px-4 py-2">{data.email}</td>
                            <td className="border px-4 py-2">{data.message}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                )}
        </div>
    )
}

export default contactUs;