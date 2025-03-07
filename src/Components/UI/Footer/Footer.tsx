import { useNavigate } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer className="footerContainer">
            <div className="footerTop">
                <img src="icons/logo_white.svg" alt="Логотип" className="footerLogo" />
                <div className="footerContacts">
                    <p>Адрес: Ташкент, Узбекистан</p>
                    <p>Телефон: +998 90 123 45 67</p>
                    <p>Email: info@optomart.uz</p>
                </div>
            </div>
            <div className="footerNav">
                <span onClick={() => navigate("/")}>Главная</span>
                <span onClick={() => navigate("/sales")}>Акции</span>
                <span onClick={() => navigate("/products")}>Каталог</span>
                <span onClick={() => navigate("/about")}>О нас</span>
            </div>
            <div className="footerSocial">
                <img src="icons/instagram_icon_white.png" alt="Instagram" onClick={() => window.open("https://instagram.com", "_blank")} />
                <img src="icons/facebook_icon_white.png" alt="Facebook" onClick={() => window.open("https://facebook.com", "_blank")} />
                <img src="icons/telegram_icon_white.png" alt="Telegram" onClick={() => window.open("https://telegram.org", "_blank")} />
            </div>
            <div className="footerBottom">
                <p>© 2024 Optomart. Все права защищены.</p>
            </div>
        </footer>
    );
};
