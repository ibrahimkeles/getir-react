import { useState, useEffect } from "react"
import CardsData from '../api/cards.json'
import CardItem from "./ui/CardItem";

export default function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(CardsData);

  }, [])
  return (
    <div className="grid grid-cols-3 gap-x-4 ">
      {cards && cards.map((card) => <CardItem key={card.id} card={card} />)}
    </div>
  )
}
