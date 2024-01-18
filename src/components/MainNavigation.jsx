import { NavLink } from "react-router-dom"
import "../styles/MainNavigation.css"

const MainNavigation = (props) => {

  const onOffBarButton = () => {
    if (props.menuActive === false) {
      props.setMenuActive(true)
    } else if (props.menuActive === true) {
      props.setMenuActive(false)
    }
  }

  return (
    <div className="navigation">
      <NavLink className="section-btn homepage-btn" to="/Anasayfa">ANASAYFA</NavLink>
      <NavLink className="section-btn aboutus-btn" to="/Hakkımızda">HAKKIMIZDA</NavLink>
      <NavLink className="section-btn services-btn" to="/Hizmetlerimiz">HİZMETLERİMİZ</NavLink>
      <NavLink className="section-btn" to="/İletişim"><i className="fa-solid fa-phone icon trin-trin"></i> İLETİŞİM</NavLink>
      <button onClick={onOffBarButton} className={`${props.menuActive ? "active-navigation-bar-button" : "navigation-bar-button"}`}><i className="fa-solid fa-bars navigation-bar-icon"></i></button>
    </div>
  )
}

export default MainNavigation