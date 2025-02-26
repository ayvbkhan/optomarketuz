import { Input } from "../../Input"
import "./Header.css";

export const Header = () => {
  return (
      <>
          <div className="mainContainer">
              <img src="icons/logo.svg" alt="Логотип" className="logo"/>
              <div className="search">
                  <form>
                      <Input type="text" placeholder="Поиск" />
                      <button><img src="icons/search_icon.svg" alt="Поиск" className="searchLogo" /></button>
                 </form>
              </div>
              <div className="profileContainer">
                  <img src="icons/favourite_icon.svg" alt="Избранное" />
                  <img src="icons/bag_icon.svg" alt="Корзина" />
                  <img src="icons/profile_icon.svg" alt="Профиль" />
              </div>
          </div>
          <div className="navbar">
              <div className="categories">
                  <span>Главная</span>
                  <span>Акции</span>
                  <span>Каталог</span>
                  <span>О нас</span>
              </div>
              <div className="socialNetworksContainer">
                  <img src="icons/instagram_icon.svg" alt="instagram" />
                  <img src="icons/facebook_icon.svg" alt="facebook" />
                  <img src="icons/telegram_icon.svg" alt="telegram" />
              </div>
          </div>
      </>
  )
}
