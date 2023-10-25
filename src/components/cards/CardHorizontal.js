import styles from './CardHorizontal.module.css'

function CardHorizontal ({image, altweather, city, temperature, handleOnClick}) {
    return (
        <section onClick={handleOnClick} className={styles.container}>
            <img src={image} alt={altweather} className={styles.imgWeather}/>
            <p className={styles.cityState}>
            <span>{city}</span>
            </p>
            <span className={styles.temperature}>{temperature}</span>
        </section>
    )
}

export default CardHorizontal;