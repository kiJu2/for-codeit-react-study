import Card from "./components/card";
import "./App.css";
import { useEffect, useState } from "react";
import useModal from "./hooks/use-modal";
import Modal from "./components/modal";

function useCards() {
  const [cards, setCards] = useState([]);

  function deleteCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.products);
      });
  }, []);
  return { cards, deleteCard };
}

function App() {
  const { openModal, closeModal, isModalOpen, modalContent } = useModal();
  const { cards, deleteCard } = useCards();

  return (
    <>
      <div className="container">
        <h1>코드잇/주강사 보충수업: 리액트로 만들어 보는 카드리스트</h1>
        <div className="card-section">
          {cards.map(({ title, description, thumbnail, id }) => {
            return (
              <Card
                title={title}
                key={id}
                description={description}
                onClick={openModal}
                thumbnail={thumbnail}
              />
            );
          })}
        </div>
      </div>
      <Modal title="제목" isOpen={isModalOpen} onClose={closeModal}>
        <p>{modalContent}</p>
      </Modal>
    </>
  );
}

export default App;
