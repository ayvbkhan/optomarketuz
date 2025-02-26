
import { Input } from "../../Input";
import "./Feedback.css";

export const Feedback = () => {
    return (
        <div className="feedbackContainer">
            <div className="feedbackForm">
                <h2>Свяжитесь с нами</h2>
                <form>
                    <Input type="text" placeholder="Ваше имя" />
                    <Input type="tel" placeholder="Ваш телефон" />
                    <textarea placeholder="Ваше сообщение"></textarea>
                    <button type="submit">Отправить</button>
                </form>
            </div>

            <div className="feedbackMap">
                <h2>Наше местоположение</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6169.016646972846!2d69.25086311898995!3d41.31542476819794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b689e13%3A0xaf4cdf526e02f5e7!2z0KXQuNC70YLQvtC9IC0g0KLQsNGI0LrQtdC90YI!5e0!3m2!1sru!2s!4v1740570242216!5m2!1sru!2s"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
};
