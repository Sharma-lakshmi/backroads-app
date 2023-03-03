import React from "react"
/*import { pageLinks, socialLinks } from "../data"*/
import PageLink from "./PageLink"
import SocialLink from "./SocialLink"
const footer = () => {
  return (
    <footer className="section footer">
      {/*method 1 */}
      <PageLink parentClass="footer-links" itemClass="footer-link" />

      {/*method 2 */}
      {/* <ul className="footer-links">
        {pageLinks.map((links) => {
          const { id, href, text } = links
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          )
        })}

      {/*Method 1 ----------------------------*/}

      <SocialLink parentClass="footer-icons" itemClass="footer-icon" />

      {/*-------------------*/}
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default footer
