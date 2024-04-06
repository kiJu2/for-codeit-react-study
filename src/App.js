import Card from "./components/card";
import "./App.css";
import { useEffect, useState } from "react";
import useModal from "./hooks/use-modal";
import Modal from "./components/modal";

function App() {
  const [cards, setCards] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalContent, setModalContent] = useState("");

  const { openModal, closeModal, isModalOpen, modalContent } = useModal();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.products);
      });
  }, []);

  // const handleCardClick = (description) => {
  //   console.log("Run handleCardClick");
  //   setModalContent(description);
  //   setIsModalOpen(true);
  // };
  // const handleCardClick = useCallback((description) => {
  // console.log('Run handleCardClick');
  //   setModalContent(description);
  //   setIsModalOpen(true);
  // }, []);

  // const handleCloseModal = () => {
  //   console.log("Run CloseModal");
  //   setIsModalOpen(false);
  // };
  // const handleCloseModal = useCallback(() => {
  // console.log('Run CloseModal');
  //   setIsModalOpen(false);
  // }, []);

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
