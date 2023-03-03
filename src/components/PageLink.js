import React from "react"
import { pageLinks } from "../data"

const pageLink = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((links) => {
        const { id, href, text } = links
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default pageLink
