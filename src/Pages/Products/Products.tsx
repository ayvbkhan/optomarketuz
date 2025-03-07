import "./Products.css";
import * as Dialog from "@radix-ui/react-dialog";

interface Category {
    name: string;
    id: string;
}

interface Product {
    image: string;
    title: string;
    description: string;
    price: string;
}

const categories: Category[] = [
    { name: "Фрукты", id: "fruits" },
    { name: "Овощи", id: "vegetables" },
    { name: "Бакалея", id: "grocery" }
];

const productData: Product = {
    image: "images/apple.png",
    title: "Яблоко Golden",
    description: "Сочное и сладкое яблоко Golden с насыщенным вкусом.",
    price: "20.900 сум"
};

export const ProductModal: React.FC = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger className="button">Подробнее</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="modal-overlay" />
                <Dialog.Content className="modal-content">
                    <Dialog.Title className="modal-title">{productData.title}</Dialog.Title>
                    <Dialog.Description className="modal-description">
                        {productData.description}
                    </Dialog.Description>
                    <img src={productData.image} alt="Apple" className="modal-image" />
                    <p className="modal-price">Цена: {productData.price}</p>
                    <Dialog.Close className="button close-button">Закрыть</Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export const Products: React.FC = () => {
    return (
        <>
            <div className="productsContainer">
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
                                    <span className="product-price">{productData.price}</span>
                                    <ProductModal />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </>
    );
};
