import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const cardData = [
    {
      id: 1,
      isNew: true,
      title: "Kriss Vector",
      src: "https://c8.alamy.com/comp/2C1BTC6/vector-pixel-art-sci-fi-machine-gun-isolated-cartoon-2C1BTC6.jpg",
      desc_lists: ["+ 50 atk speed", "+ 50 dmg"],
      price: 100,
    },
    {
      id: 2,
      isNew: true,
      title: "New Samurai Sword!",
      src: "https://static.vecteezy.com/system/resources/previews/007/816/863/original/fully-edited-pixel-art-colored-katana-sword-weapon-free-vector.jpg",
      desc_lists: ["+ 15 atk speed", "+ 20 dmg"],
      price: 20,
    },
    {
      id: 3,
      isNew: true,
      title: "The hell sword!",
      src: "https://pbs.twimg.com/media/EwWtMH1XAAk9gcF.jpg",
      desc_lists: ["+ 100 dmg", "Hot hot hot hot hot!"],
      price: 250,
    },
    {
      id: 4,
      isNew: false,
      title: "Normal Sword",
      src: "https://art.pixilart.com/thumb/sr2dd1529d4deaws3.png",
      desc_lists: ["+ 5 dmg"],
      price: 5,
    },
    {
      id: 5,
      isNew: false,
      title: "A normal gun",
      src: "https://c8.alamy.com/comp/2BXM44H/vector-pixel-art-gun-isolated-2BXM44H.jpg",
      desc_lists: ["+ 5 atk speed", "+ 10 dmg", "old but powerful"],
      price: 50,
    },
  ];

  const [filter, setFilter] = useState('');

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredItems = cardData.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Navbar onFilterChange={handleFilterChange} />
      <div className="container row">
        {filteredItems.map((card, index) => (
          <Card 
            key={index}
            isNew={card.isNew}
            title={card.title}
            src={card.src}
            desc_lists={card.desc_lists}
            price={card.price}
          />
        ))}        
      </div>
      
    </>
  )
}

export default App
