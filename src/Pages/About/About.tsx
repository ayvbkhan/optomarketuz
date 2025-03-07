import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.css";
import { Feedback } from "../../Components/UI/Feedback/Feedback";

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

export const About: React.FC = () => {
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

            <div className="informationAbout">
                <p><b>"Optomart" – ведущая сеть дискаунтеров в Узбекистане</b></p>
                <p>"Optomart" – это популярная сеть дискаунтеров, завоевавшая доверие покупателей благодаря доступным ценам и широкому ассортименту товаров. Основное преимущество сети – возможность приобретения качественной продукции по выгодным ценам, что делает "Optomart" идеальным местом для экономных покупок.</p>
                <p>В магазинах "Optomart" представлен богатый выбор товаров, включая продукты питания, бытовую химию, товары для дома и многое другое. Здесь можно найти свежие продукты, крупы, консервы, напитки, молочную продукцию, замороженные продукты и бакалею. Для удобства покупателей предлагаются товары первой необходимости, а также различные акции и скидки, позволяющие сэкономить еще больше.</p>
                <p>Помимо продовольственных товаров, "Optomart" предлагает широкий ассортимент бытовой химии. В магазинах сети можно приобрести стиральные порошки, чистящие средства, мыло, шампуни и другие товары для ухода за домом и личной гигиены. Для семей, которые заботятся о чистоте и уюте, это прекрасная возможность приобрести необходимые товары по доступным ценам.</p>
                <p>Кроме того, магазины "Optomart" предлагают разнообразные товары для дома – посуду, текстиль, кухонные принадлежности и предметы интерьера. Это делает сеть универсальным местом для покупок, где каждый найдет все необходимое для своего дома.</p>
                <p>Благодаря удобному расположению магазинов, выгодным ценам и качественной продукции, "Optomart" остается одним из самых востребованных дискаунтеров в Узбекистане. Сеть постоянно расширяется, открывая новые магазины и улучшая сервис, чтобы радовать своих покупателей еще больше.</p>
            </div>

            <Feedback />
        </>
    );
};
