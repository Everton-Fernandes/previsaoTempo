import styles from './CardVertical.module.css'

function CardVertical ({image, altImage, hour, temperature}) {
    return (
        <section className={styles.container}>
            <span className={styles.textCard}>{hour}</span>
            <img src={image} alt={altImage} className={styles.imgWeather}/>
            <span className={styles.textCard}>{temperature}</span>
        </section>
    )
}
export default CardVertical;