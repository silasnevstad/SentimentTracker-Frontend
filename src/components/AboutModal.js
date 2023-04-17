import '../styles/Modal.css';

function Modal({ onClose }) {
    return (
        <div className="Modal">
            <div className="card">
                <button className="dismiss" type="button" onClick={onClose}>
                    ×
                </button>
                <div className="header">
                    <div className="content">
                        <span className="title">About <span style={{ color: '#80de4e' }}>Us</span></span>

                        <div className="bottom-content">
                            <p> Welcome to Senttrac! </p>

                            <p> Senttrac is an innovative analysis tool created to offer real-time insights into the emotions driving online conversations. By leveraging state-of-the-art sentiment analysis models and a cutting-edge Large Language Model (LLM), Senttrac delves into recent tweets, Reddit posts, and news headlines related to your query. </p>

                            <p> As a user, you'll be greeted with an easy-to-understand radar chart of emotions, a summary of the overall sentiment, and relevant keywords, all aimed at helping you gain a clear understanding of the emotions surrounding your query. </p>

                            <p> Thank you for choosing our service, and we hope you enjoy exploring the world of online sentiment with Senttrac by your side! </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
