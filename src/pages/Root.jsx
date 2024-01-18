import { Fragment, useState } from "react"
import { NavLink } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
import { Outlet } from "react-router-dom"
import Logo from "../components/Logo"
import "../styles/Root.css"


const RootLayout = () => {
  const [menuActive, setMenuActive] = useState(false)

  console.log(menuActive)

  return (
    <Fragment>
      <header className="header">
        <Logo />
        <MainNavigation setMenuActive={setMenuActive} menuActive={menuActive} />
      </header>
      <div className={`${menuActive ? "menu-active" : "menu"}`}>
        <ul className="menu-ul">
          <NavLink onClick={()=> setMenuActive(false)} className="menu-option" to="/Anasayfa">ANASAYFA</NavLink>
          <NavLink onClick={()=> setMenuActive(false)} className="menu-option" to="/Hakkımızda">HAKKIMIZDA</NavLink>
          <NavLink onClick={()=> setMenuActive(false)} className="menu-option" to="/Hizmetlerimiz">HİZMETLERİMİZ</NavLink>
          <NavLink onClick={()=> setMenuActive(false)} className="menu-option" to="/İletişim"><i className="fa-solid fa-phone icon trin-trin"></i> İLETİŞİM</NavLink>
        </ul>
      </div>

      <Outlet />
    </Fragment>
  )
}

export default RootLayout