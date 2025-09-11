import Icon from "../../../../public/assets/Icon";
import css from "./GeneralInfo.module.css";

export default function GeneralInfo({
  address,
  brand,
  model,
  year,
  description,
  price,
  mileage,
}) {
  const parts = address.split(", ");
  const city = parts[parts.length - 2];
  const country = parts[parts.length - 1];
  const formattedMileage = mileage.toLocaleString("uk-UA");

  return (
    <div className={css.container}>
      <div className={css.head}>
        <h2 className={css.title}>
          {brand} {model}, {year}
        </h2>
        <p className={css.id}>Id: undefined</p>
      </div>
      <div className={css.subHead}>
        <p className={css.address}>
          {<Icon name="location" classname={css.locationIcon} />} {city},{" "}
          {country}
        </p>
        <p className={css.mileage}>Mileage: {formattedMileage} km</p>
      </div>
      <p className={css.price}>${price}</p>
      <p className={css.desc}>{description}</p>
    </div>
  );
}
