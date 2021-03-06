import React from "react"
import logo3 from "../assets/MACHUCHI2.jpg"
import logo4 from "../assets/machoochi.jpg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
//this PageLinks can be renamed anythings because this is default export from ../constants/links
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo4} alt="logo" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
