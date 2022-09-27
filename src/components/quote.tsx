import axios from "axios";
import refresh from "../assets/desktop/icon-refresh.svg";
import useClockStore from "../appStore";
import { useEffect } from "react";

export default function Quote() {
    const author = useClockStore((state: any) => state.author);
    const quote = useClockStore((state: any) => state.quote);
    const updateQuote = useClockStore((state: any) => state.updateQuote);
    const updateAuthor = useClockStore((state: any) => state.updateAuthor);

    async function getQuote() {
        try {
            const res = await axios.get(
                "https://programming-quotes-api.herokuapp.com/Quotes/random"
            );
            updateQuote(res.data.en);
            updateAuthor(res.data.author);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getQuote();
    }, []);
    return (
        <div className="quote">
            <div className="quote__top">
                <div className="quote__top--quote">"{quote}"</div>
                <div className="quote__top--button">
                    <img src={refresh} alt="refresh" onClick={getQuote} />
                </div>
            </div>
            <div className="quote__bottom">
                <h5>{author}</h5>
            </div>
        </div>
    );
}
