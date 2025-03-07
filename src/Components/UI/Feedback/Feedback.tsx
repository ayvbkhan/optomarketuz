
import { Input } from "../../Input";
import "./Feedback.css";

export const Feedback = () => {
    return (
        <div className="feedbackContainer">
            <div className="feedbackForm">
                <h2>Свяжитесь с нами</h2>
                <form>
                    <Input type="text" placeholder="Ваше имя*" />
                    <Input type="tel" placeholder="Ваш телефон*" />
                    <textarea placeholder="Ваше сообщение*"></textarea>
                    <button type="submit">Отправить</button>
                </form>
            </div>

            <div className="feedbackMap">
                <h2>Наше местоположение</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6806139243163!2d69.3250706!3d41.3158112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef57b0d40d41b%3A0x68612c6ef272db14!2sHORECA%20OPTOM%20MARKET!5e0!3m2!1sru!2s!4v1741266715438!5m2!1sru!2s"
                    width="700"
                    height="300"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
};
