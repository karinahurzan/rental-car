import CarCard from "../../components/CarCard/CarCard";
import carsData from "../../mockData/cars.json";
import css from "./Catalog.module.css";

export default function Catalog() {
  return (
    <div>
      <ul className={css.catalogList}>
        {carsData && carsData.cars && carsData.cars.length
          ? carsData.cars.map((car) => (
              <li className={css.catalogItem} key={car.id}>
                <CarCard car={car} />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
