import { useState } from "react";
import { Input } from "../../Input";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

    return (
        <>
            <div className="mainContainer">
                <img src="icons/logo.svg" alt="Логотип" className="logo" />
                <div className="search">
                    <form>
                        <Input type="text" placeholder="Поиск" />
                        <button>
                            <img src="icons/search_icon.svg" alt="Поиск" className="searchLogo" />
                        </button>
                    </form>
                </div>
                <div className="profileContainer">
                    <div className="favoritesContainer">
                        <img
                            src="icons/favourite_icon.svg"
                            alt="Избранное"
                            onClick={() => setIsFavoritesOpen(!isFavoritesOpen)}
                            className="icon"
                        />
                        {isFavoritesOpen && (
                            <div className="contextMenu">
                                <p>Ваши избранные товары отсутствуют</p>
                            </div>
                        )}
                    </div>
                    <div className="cartContainer">
                        <img
                            src="icons/bag_icon.svg"
                            alt="Корзина"
                            onClick={() => setIsCartOpen(!isCartOpen)}
                            className="icon"
                        />
                        {isCartOpen && (
                            <div className="contextMenu">
                                <p>Ваша корзинка пуста</p>
                            </div>
                        )}
                    </div>

                    <img src="icons/profile_icon.svg" alt="Профиль" onClick={() => navigate("/login")} />
                </div>
            </div>

            <div className="navbar">
                <div className="categories">
                    <span onClick={() => navigate("/")}>Главная</span>
                    <span onClick={() => navigate("/sales")}>Акции</span>
                    <span onClick={() => navigate("/products")}>Каталог</span>
                    <span onClick={() => navigate("/about")}>О нас</span>
                </div>
                <div className="socialNetworksContainer">
                    <img src="icons/instagram_icon.svg" alt="instagram" onClick={() => window.open("https://instagram.com", "_blank")} />
                    <img src="icons/facebook_icon.svg" alt="facebook" onClick={() => window.open("https://facebook.com", "_blank")} />
                    <img src="icons/telegram_icon.svg" alt="telegram" onClick={() => window.open("https://telegram.org", "_blank")} />
                </div>
            </div>
        </>
    );
};
