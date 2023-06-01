import style from './RecipeFront.module.css';
import { Link } from "react-router-dom";

const RecipeFront = (props) =>{
    return(
        <div className={style.divContenedor}>
            <div className={style.divContenedorbutton}>
                <img className={style.divContenedorCardImg} src={props.image} alt={props.name}/>
            </div>
            <div>
            <Link to={`/home/${props.id}`}>
                <h1 className={style.nameh2}>{`Name: ${props.name}`}</h1>
                </Link>     
                <h1 className={style.nameh2B}>{`Type Diets: ${props.typeDiets}`}</h1>
            </div>

        </div>
    )
     
    }
    
    export default RecipeFront;