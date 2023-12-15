import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import items from './data/items.json'

function App() {
  const cardData = items

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
