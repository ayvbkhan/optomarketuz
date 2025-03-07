import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.css";
import { Feedback } from "../../Components/UI/Feedback/Feedback";
import { Products } from "../Products/Products";

const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "10px", zIndex: 2 }}
            onClick={onClick}
        />
    );
};

const PrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "10px", zIndex: 2 }}
            onClick={onClick}
        />
    );
};

export const Main: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    

    return (
        <>
            <div className="slider">
                <Slider {...settings}>
                    <div>
                        <img src="images/banner1.png" alt="Баннер" className="banneres" />
                    </div>
                    <div>
                        <img src="images/banner2.png" alt="Баннер" className="banneres" />
                    </div>
                    <div>
                        <img src="images/banner3.png" alt="Баннер" className="banneres" />
                    </div>
                </Slider>
            </div>

            <div className="information">
                <p><b>"Optomart"</b>- это узбекская сеть дискаунтеров, известная своими
                    низкими ценами и широким ассортиментом товаров. В данных
                    магазинах можно найти продукты питания, бытовую химию,
                    товары для дома, и многое другое.</p>
            </div>
            <button className="informationBtn">Подробнее</button>
            <Products />
       
            <Feedback />
        </>
    );
};
