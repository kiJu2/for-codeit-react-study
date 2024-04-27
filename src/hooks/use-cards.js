import { useState, useEffect } from "react";

export default function useCards() {
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
