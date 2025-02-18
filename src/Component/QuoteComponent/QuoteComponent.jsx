import quote from "./quote";
import './QuoteComponent.css';

function QuoteComponent() {
    return (
        <div className="quotes-wrapper">
            {quote.map((q, index) => (
                <div key={index} className="quote-box">
                    <h1>{q.quote}</h1>
                    <p>- {q.author}</p>
                </div>
            ))}
        </div>
    );
}

export default QuoteComponent;
