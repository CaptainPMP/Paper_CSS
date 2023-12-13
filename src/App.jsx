import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container row">
        <Card 
          isNew={true}
          title="Kriss Vector"
          src={"https://c8.alamy.com/comp/2C1BTC6/vector-pixel-art-sci-fi-machine-gun-isolated-cartoon-2C1BTC6.jpg"}
          desc_lists={["+ 50 atk speed", "+ 50 dmg"]}
          price={100}
        />
        <Card 
          isNew={true}
          title="New Samurai Sword!"
          src={"https://static.vecteezy.com/system/resources/previews/007/816/863/original/fully-edited-pixel-art-colored-katana-sword-weapon-free-vector.jpg"}
          desc_lists={["+ 15 atk speed", "+ 20 dmg"]}
          price={20}
        />
        <Card 
          isNew={true}
          title="The hell sword!"
          src={"https://pbs.twimg.com/media/EwWtMH1XAAk9gcF.jpg"}
          desc_lists={["+ 100 dmg", "Hot hot hot hot hot!"]}
          price={250}
        />
        <Card 
          isNew={false}
          title="Normal Sword"
          src={"https://art.pixilart.com/thumb/sr2dd1529d4deaws3.png"}
          desc_lists={["+ 5 dmg"]}
          price={5}
        />
        <Card 
          isNew={false}
          title="A normal gun"
          src={"https://c8.alamy.com/comp/2BXM44H/vector-pixel-art-gun-isolated-2BXM44H.jpg"}
          desc_lists={["+ 5 atk speed", "+ 10 dmg", "old but powerful"]}
          price={50}
        />
        
      </div>
      
    </>
  )
}

export default App
