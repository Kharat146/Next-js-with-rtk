"use client"
import { addUser } from '@/redux/slice';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';

const UserForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
        role: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear validation error on change
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        // Validation for First Name
        if (formData.firstName.trim() === '') {
            newErrors.firstName = 'First Name is required';
            valid = false;
        }

        // Validation for Last Name
        if (formData.lastName.trim() === '') {
            newErrors.lastName = 'Last Name is required';
            valid = false;
        }

        // Validation for Email
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        // Validation for Password
        if (formData.password.trim() === '') {
            newErrors.password = 'Password is required';
            valid = false;
        }

        // Validation for Phone Number
        if (formData.phoneNumber.trim() === '') {
            newErrors.phoneNumber = 'Phone Number is required';
            valid = false;
        } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Phone Number is invalid';
            valid = false;
        }

        // Validation for Address
        if (formData.address.trim() === '') {
            newErrors.address = 'Address is required';
            valid = false;
        }

        // Validation for Role
        if (formData.role.trim() === '') {
            newErrors.role = 'Role is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Add your submission logic here
            console.log('Form submitted:', formData);
            dispatch(addUser(formData));
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phoneNumber: '',
                address: '',
                role: '',
            });
            router.push("/");
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <form className="mx-auto w-full mt-8 mx-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block font-bold">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`mt-1 p-2 w-full border rounded-md ${errors.firstName ? 'border-red-500' : ''
                            }`}
                        required
                    />
                    {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                </div>

                <div>
                    <label className="block font-bold">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`mt-1 p-2 w-full border rounded-md ${errors.lastName ? 'border-red-500' : ''
                            }`}
                        required
                    />
                    {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                </div>

                <div>
                    <label className="block font-bold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : ''
                            }`}
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                    <label className="block font-bold">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`mt-1 p-2 w-full border rounded-md ${errors.password ? 'border-red-500' : ''
                            }`}
                        required
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                </div>

                <div>
                    <label className="block font-bold">Phone Number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={`mt-1 p-2 w-full border rounded-md ${errors.phoneNumber ? 'border-red-500' : ''
                            }`}
                        required
                    />
                    {errors.phoneNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                    )}
                </div>

                <div>
                    <label className="block font-bold">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : ''
                            }`}
                        required
                    />
                    {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                    )}
                </div>

                <div>
                    <label className="block font-bold">Role</label>
                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className={`mt-1 p-2 w-full border rounded-md ${errors.role ? 'border-red-500' : ''
                            }`}
                        required
                    />
                    {errors.role && (
                        <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                    )}
                </div>
            </div>

            <div className="mt-6">
                <button
                    type="submit"
                    className="bg-emerald-900 text-white font-bold p-2 rounded-md w-full"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default UserForm;

