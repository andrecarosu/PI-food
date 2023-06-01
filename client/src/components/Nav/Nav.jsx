import { Link } from "react-router-dom";
import style from './Nav.module.css'

const Nav = () =>{
return(
    <div className={style.navContenedor}>
        <Link to="/home"  className={style.link} >HOME </Link>
        <Link to="/form"  className={style.link} >CREATE RECIPE </Link>
    </div>
)
}


export default Nav;