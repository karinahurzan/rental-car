import { Link } from "react-router-dom";
import css from "./CarCard.module.css";
import Icon from "../../../public/assets/Icon";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { selectIsFavorite } from "../../redux/favourites/selectors";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/favourites/favouritesSlice";
import CustomLink from "../common/CustomLink/CustomLink";

export default function CarCard({ car }) {
  const parts = car.address.split(", ");
  const city = parts[parts.length - 2];
  const country = parts[parts.length - 1];
  const formattedMileage = car.mileage.toLocaleString("uk-UA");
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(car.id));

  const handleSave = (id) => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

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
          {car.brand} <span className={css.model}>{car.model}, </span>
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

      <CustomLink name="Read more" minWidth="100%" href={`catalog/${car.id}`} />
      <button onClick={() => handleSave(car.id)} className={css.save}>
        <Icon
          name="heart"
          classname={clsx(isFavorite ? css.heartIconSaved : css.heartIcon)}
        />
      </button>
    </div>
  );
}
