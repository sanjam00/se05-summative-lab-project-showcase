import { NavLink } from "react-router-dom"
import './NavBar.css'

export default function NavBar() {
  return (
    <>

      <NavLink
        to='/'>
        Home
      </NavLink>

      <NavLink
        to='/shop'>
        Shop
      </NavLink>

      <NavLink
        to='/admin-portal'>
        Admin Portal
      </NavLink>
    </>
  )
}