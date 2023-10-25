import styles from "./CardPrincipal.module.css";
import CardVertical from "./CardVertical";

function CardPrincipal({
  description,
  date,
  city,
  image,
  temperatureMin,
  temperatureMax,
  temperature,
  hour,
  hour1,
  hour2,
  hour3,
  hour4,
  hour5,
  descriptionCardVertical,
  descriptionCardVertical1,
  descriptionCardVertical2,
  descriptionCardVertical3,
  descriptionCardVertical4,
  descriptionCardVertical5,
  imageCardVertical,
  imageCardVertical1,
  imageCardVertical2,
  imageCardVertical3,
  imageCardVertical4,
  imageCardVertical5,
  temperatureCardVertical,
  temperatureCardVertical1,
  temperatureCardVertical2,
  temperatureCardVertical3,
  temperatureCardVertical4,
  temperatureCardVertical5,
}) {
  return (
    <section className={styles.container}>
      <div className={styles.cardHeader}>
        <span className={styles.description}>{description}</span>
        <p className={styles.temperatureMinMax}>
          <span>{temperatureMin}</span>/<span>{temperatureMax}</span>
        </p>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cityDateDescription}>
          <strong className={styles.cityBody}>{city}</strong>
          <p className={styles.dateBody}>{date}</p>
          <img className={styles.imageBody} src={image} alt={description} />
        </div>
        <strong className={styles.temperatureBody}>{temperature}</strong>
      </div>

      <hr />
      
      <div className={styles.cardsVerticals}>
        <CardVertical
          image={imageCardVertical}
          hour={hour}
          alt={descriptionCardVertical}
          temperature={temperatureCardVertical}
        />
        <CardVertical
          image={imageCardVertical1}
          hour={hour1}
          alt={descriptionCardVertical1}
          temperature={temperatureCardVertical1}
        />
        <CardVertical
          image={imageCardVertical2}
          hour={hour2}
          alt={descriptionCardVertical2}
          temperature={temperatureCardVertical2}
        />
        <CardVertical
          image={imageCardVertical3}
          hour={hour3}
          alt={descriptionCardVertical3}
          temperature={temperatureCardVertical3}
        />
        <CardVertical
          image={imageCardVertical4}
          hour={hour4}
          alt={descriptionCardVertical4}
          temperature={temperatureCardVertical4}
        />
        <CardVertical
          image={imageCardVertical5}
          hour={hour5}
          alt={descriptionCardVertical5}
          temperature={temperatureCardVertical5}
        />
      </div>
    </section>
  );
}

export default CardPrincipal;
