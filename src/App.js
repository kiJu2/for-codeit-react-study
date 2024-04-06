import Card from "./components/card";
import "./App.css";
import { useEffect, useState } from "react";
import useModal from "./hooks/use-modal";
import Modal from "./components/modal";

function App() {
  const [cards, setCards] = useState([]);

  const { openModal, closeModal, isModalOpen, modalContent } = useModal();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.products);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1>카드 리스트</h1>
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
