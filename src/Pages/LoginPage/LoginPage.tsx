import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Авторизация</h2>
                <div className="input-group">
                    <label htmlFor="email">Электронная почта</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Введите электронную почту"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Пароль</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="login-button" onClick={handleLogin}>
                    Войти
                </button>
            </div>
        </div>
    );
}
