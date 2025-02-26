import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.css";
import * as Dialog from "@radix-ui/react-dialog";
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

const categories = [
    { name: "Фрукты", id: "fruits" },
    { name: "Овощи", id: "vegetables" },
    { name: "Бакалея", id: "grocery" }
];

const productData = {
    image: "images/apple.png",
    title: "",
    description: "Яблоко Golden",
    price: "20.900"
};

export const ProductModal: React.FC = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger className="button">Подробнее</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="modal-overlay" />
                <Dialog.Content className="modal-content">
                    <Dialog.Title className="modal-title">Яблоко Golden</Dialog.Title>
                    <Dialog.Description className="modal-description">
                        Сочное и сладкое яблоко Golden с насыщенным вкусом.
                    </Dialog.Description>
                    <img src="images/apple.png" alt="Apple" className="modal-image" />
                    <p className="modal-price">Цена: 20.900 сум</p>
                    <Dialog.Close className="button close-button">Закрыть</Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
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
                        <img src="images/banner1.jpg" alt="Баннер" className="banneres" />
                    </div>
                    <div>
                        <img src="images/banner2.jpg" alt="Баннер" className="banneres" />
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

            {categories.map((category) => (
                <div key={category.id}>
                    <p className="productTypes">{category.name}:</p>
                    <div className="product-list">
                        {[...Array(4)].map((_, index) => (
                            <div className="product-card" key={index}>
                                <img src={productData.image} alt="Apple" className="product-image" />
                                <div className="product-info">
                                    <h3 className="product-title">{productData.title}</h3>
                                    <p className="product-description">{productData.description}</p>
                                    <span className="product-price">{productData.price} сум</span>
                                    <ProductModal />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <Feedback />
        </>
    );
};
