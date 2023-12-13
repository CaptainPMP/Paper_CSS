import React from 'react'

const Navbar = () => {
  return (
        <nav className="border row ">
            <div className="nav-brand col col-3">
                <h3><a href="#">Get PaperCSS</a></h3>
            </div>
                <input type="text" placeholder="Search your items" id="paperInputs1" className='col-3'/>
            <div className="collapsible col col-fill">
                <ul className="inline row flex-edges">
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Github</a></li>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar