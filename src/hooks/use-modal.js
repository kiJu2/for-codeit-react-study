// hooks/useModal.js
import { useState, useCallback } from 'react';

export default function useModal(initialContent = "") {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(initialContent);

  const openModal = useCallback((content = "") => {
    setModalContent(content);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return { isModalOpen, modalContent, openModal, closeModal };
}
