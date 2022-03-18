import { useState } from 'react';
import './MovieCard.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const MovieCard = ({ title, description, genres }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <div className="card" onClick={toggleModal}>
            <Modal
                isOpen={showModal}
                // onRequestClose={toggleModal}
                shouldCloseOnOverlayClick={true}
                // style= {
                //     overlay: {
                //         backgroundColor:'grey'
                //     },
                // }
                style={{
                    overlay: { backgroundColor: 'grey' },
                    content: {
                        width: '500px',
                        height: '250px',
                        margin: "auto",
                        backgroundColor: "#fefefe"
                    },
                }}
            >
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>{genres}</h4>
                <button onClick={toggleModal}>close</button>
            </Modal>
            <img
                src={`https://ui-avatars.com/api/?name=${title[0]}+${title[1]}background=random&rounded=true&bold=true`}
                alt="movie initials"
            />
            <h3>{title}</h3>
            <p>
                {description.slice(0, Math.min(100, description.length)) +
                    '.....'}
            </p>
            <h4>{genres}</h4>
        </div>
    );
};

export default MovieCard;
