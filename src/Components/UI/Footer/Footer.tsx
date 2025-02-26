import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footerContainer">
            <div className="footerTop">
                <img src="icons/logo.svg" alt="Логотип" className="footerLogo" />
                <div className="footerContacts">
                    <p>Адрес: Ташкент, Узбекистан</p>
                    <p>Телефон: +998 90 123 45 67</p>
                    <p>Email: info@optomart.uz</p>
                </div>
            </div>
            <div className="footerNav">
                <span>Главная</span>
                <span>Акции</span>
                <span>Каталог</span>
                <span>О нас</span>
                <span>Контакты</span>
            </div>
            <div className="footerSocial">
                <img src="icons/instagram_icon.svg" alt="Instagram" />
                <img src="icons/facebook_icon.svg" alt="Facebook" />
                <img src="icons/telegram_icon.svg" alt="Telegram" />
            </div>
            <div className="footerBottom">
                <p>© 2024 Optomart. Все права защищены.</p>
            </div>
        </footer>
    );
};
