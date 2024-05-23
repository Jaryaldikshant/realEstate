import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, number, message } = formData;
        const subject = encodeURIComponent('Query');
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`);

        const mailtoLink = `mailto:dikshant.jaryalt@gmail.com?subject=${subject}&body=${body}`;

        setFormData((prevstate) => ({ ...prevstate, ["name"]: "" }));
        setFormData((prevstate) => ({ ...prevstate, ["email"]: "" }));
        setFormData((prevstate) => ({ ...prevstate, ["number"]: "" }));
        setFormData((prevstate) => ({ ...prevstate, ["message"]: "" }));
        window.location.href = mailtoLink;
    };
    return (
        <div className="py-20 px-4 max-w-xl  mx-auto">
            <h1 className="text-3xl text-center font-bold mb-4 text-blue-700">
                Contact Us
            </h1>
            <form onSubmit={handleSubmit} className="flex  flex-col">
                <label className=" mt-3" htmlFor="">Name:</label>
                <input required className=" rounded-lg px-1" placeholder="FULL NAME" type="text" name="name" value={formData.name} onChange={handleChange} />
                <label className=" mt-3" htmlFor="">Email:</label>
                <input required className=" rounded-lg px-1" placeholder="example@gmail.com" name="email" type="email" value={formData.email} onChange={handleChange} />
                <label className=" mt-3" htmlFor="">Phone No.:</label>
                <input required className=" rounded-lg px-1" name="number" placeholder="+91 0000000000" type="number" value={formData.number} onChange={handleChange} />
                <label className=" mt-3" htmlFor="">Message:</label>
                <textarea required name="message" className=" rounded-lg px-1" placeholder="MESSAGE..." id="" value={formData.message} onChange={handleChange}></textarea>
                <input type="submit" className="bg-blue-700 mt-5 text-white rounded-lg py-1 hover:bg-blue-800 transition-all duration-300 cursor-pointer" value="Contact" />
            </form>
        </div>
    );
};

export default Contact;
