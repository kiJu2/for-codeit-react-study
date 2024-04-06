import Card from "./components/card";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.products);
      });
  }, []);

  return (
    <div className="container">
      <h1>카드 리스트</h1>
      <div className="card-section">
        {cards.map(({ title, description, thumbnail }) => {
          return (
            <Card
              title={title}
              description={description}
              thumbnail={thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
