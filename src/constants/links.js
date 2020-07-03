//don't confuse this links (custome made) with Link component from GATSBY
import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!
//'styleClass' is passed as props.
//page-links class is initially applied, but styleClass is applied additionally if passed in props. 
export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
//this can be imported into any other componenet by any name. like, PageLinks, or InternalLinks etc.
//line 44 is like this
//<ul className={`page-links styleClass}`}>, 2 classes applied, if propo (styleClass is passed.)