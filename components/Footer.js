// components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4">
            <div className="container mx-auto text-center text-white">
                &copy; {new Date().getFullYear()} Зоточкина Ангелина Анатольевна
            </div>
        </footer>
    );
};

export default Footer;
