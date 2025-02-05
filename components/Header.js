// components/Header.js
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from './Button';

const Header = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Логика выхода из профиля, например, очистка токена авторизации
        router.push('/login');
    };

    return (
        <header className="bg-green-700 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl">Моя Система</h1>
                {router.pathname === '/' && (
                    <Button
                        onClick={handleLogout}
                        backgroundColor="bg-red-500"
                        textColor="text-white"
                        text="Выйти"
                        position="static"
                        className="ml-4"
                    />
                )}
            </div>
        </header>
    );
};

export default Header;
