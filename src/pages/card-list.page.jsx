import React from "react";
import Card from "../components/card";
import Modal from "../components/modal";
import useCards from "../hooks/use-cards";
import useModal from "../hooks/use-modal";
import { useToast } from "../contexts/toast-context";

function CardListPage() {
  const { openModal, closeModal, isModalOpen, modalContent } = useModal();
  const { cards, deleteCard } = useCards();
  const { toast } = useToast();

  function handleDeleteCard(id) {
    toast("카드를 삭제했습니다.");
    deleteCard(id);
  }

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
                onClickDelete={() => handleDeleteCard(id)}
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

export default CardListPage;
