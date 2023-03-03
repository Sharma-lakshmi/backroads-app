import React from "react"
import logo from "../images/logo.svg"
/*import { pageLinks, socialLinks } from "../data"*/
import PageLink from "./PageLink"
import SocialLink from "./SocialLink"
const navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*/Method 2 */}
        <PageLink parentClass="nav-links" itemClass="nav-link" />

        {/* Method 1------------------*/}
        <SocialLink parentClass="nav-icons" itemClass="nav-icon" />
      </div>
    </nav>
  )
}

export default navbar
