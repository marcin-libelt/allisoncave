import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const MainNav = ({isForFooter}) => {

  const navItems = [
    {
      route: "/",
      title: 'Home'
    },{
      route: "/portfolio",
      title: 'Portfolio'
    },{
      route: "/service",
      title: 'Services'
    },{
      route: "/about",
      title: 'About'
    },{
      route: "/blog",
      title: 'Blog'
    },{
      route: "/contact",
      title: 'Contact'
    },
  ]

  const length = Object.keys(navItems).length

  return (
  <>
  {navItems.map(({ route, title }, index) =>
    <span key={index}>
    <Link
      to={route}>
      {title}
    </Link>
    {isForFooter && index < length - 1 ? " — " : ""}
    </span>)}
  </>
)}


export default MainNav;