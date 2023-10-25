import styles from "./Search.module.css";
import Lupa from "../../img/Lupa.svg"

function Search ({cityValue, handleOnChange, handleOnKeyPress}) {
    return (
        <div className={styles.divPrincipal}>
            <input value={cityValue} onChange={handleOnChange} className={styles.inputProcura} type="search" placeholder="Insira a Cidade" />
            <img onClick={handleOnKeyPress} className={styles.imgLupa} src={Lupa} alt="lupa"/>
            
        </div>
    )
}

export default Search;