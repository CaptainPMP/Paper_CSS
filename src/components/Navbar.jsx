import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({ onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      setSearchTerm(value);
      onFilterChange(value);
    };
  return (
        <nav className="border row" id='navbar' style={{marginTop:".25rem"}}>
            <div className="nav-brand row" id="logo">
                <h3><a href="#">CatniumShop</a></h3>
            </div>
            <div className="row" id="search">
                <input  type="text"
                        placeholder="Search your items"
                        id="paperInputs1"
                        // className="col-3"
                        value={searchTerm}
                        onChange={handleInputChange}
                />
            </div>
            <div className="row" id="link">
                <ul className="inline row">
                    <li><a href="#">Github</a></li>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar