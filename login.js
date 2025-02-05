import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useRouter } from 'next/router';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы
        if (username === 'Admin' && password === 'pswrd') {
            localStorage.setItem('user', JSON.stringify({ username })); // Сохраняем пользователя в localStorage
            router.push('/'); // Переход на главную страницу
        } else {
            alert('Неверные учетные данные');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl mb-4 text-green-700">Авторизация</h2>
                <form onSubmit={handleSubmit}> {/* Добавляем обработчик события на форму */}
                    <InputField
                        type="text"
                        placeholder="Логин"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputField
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-4"
                    />
                    <Button
                        text="Войти"
                        type="submit"  // Указываем тип кнопки как submit
                        backgroundColor="bg-green-700"
                        textColor="text-white"
                        className="mt-4 w-full"
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;
