import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadCarById } from "../../redux/cars/carsSlice";
import { selectCar } from "../../redux/cars/selectors";

import css from "./CarDetails.module.css";
import Form from "../../components/CarDetailsComponents/BookingForm/BookingForm";

export default function CarDetails() {
  const { carsId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCarById(carsId));
  }, [dispatch, carsId]);

  const car = useSelector(selectCar);

  console.log(car);

  return (
    <div className={css.container}>
      <div className={css.sectionLeft}>
        <img
          className={css.img}
          src={car.img}
          alt={`${car.brand} ${car.model}`}
        />
        <Form />
      </div>
      <div className={css.sectionRight}></div>
    </div>
  );
}
