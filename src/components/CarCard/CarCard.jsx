import { Link } from "react-router-dom";
import css from "./CarCard.module.css";
import Icon from "../../../public/assets/Icon";

export default function CarCard({ car }) {
  const parts = car.address.split(", ");
  const city = parts[parts.length - 2];
  const country = parts[parts.length - 1];
  const formattedMileage = car.mileage.toLocaleString("uk-UA");

  return (
    <div className={css.card}>
      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={car.img}
          alt={`${car.brand} ${car.model}`}
        />
      </div>

      <div className={css.titleInfo}>
        <h2 className={css.title}>
          {car.brand} <span className={css.model}>${car.model}, </span>
          {car.year}
        </h2>
        <p className={css.price}>{`$${car.rentalPrice}`}</p>
      </div>
      <div className={css.infoLists}>
        <ul className={css.carInfo}>
          <li>{city}</li>
          <li>{country}</li>
          <li>{car.rentalCompany}</li>
        </ul>
        <ul className={css.carInfo}>
          <li>
            {car.type.charAt(0).toUpperCase() + car.type.slice(1).toLowerCase()}
          </li>
          <li>{`${formattedMileage} km`}</li>
        </ul>
      </div>
      <Link className={css.readMore}>Read more</Link>
      <button className={css.save}>
        <Icon name="heart" classname={css.heartIcon} />
      </button>
    </div>
  );
}
