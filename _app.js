import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user'); // Пример получения информации из localStorage о пользователе
        if (!user) {
            setIsAuthenticated(false);
            router.push('/login'); // Перенаправляем на страницу авторизации, если пользователь не аутентифицирован
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    return <Component {...pageProps} />;
}


export default MyApp;
