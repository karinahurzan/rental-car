import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadCarById } from "../../redux/cars/carsSlice";
import { selectCar } from "../../redux/cars/selectors";

import css from "./CarDetails.module.css";
import Form from "../../components/CarDetailsComponents/BookingForm/BookingForm";
import GeneralInfo from "../../components/CarDetailsComponents/GeneralInfo/GeneralInfo";
import Conditions from "../../components/CarDetailsComponents/Conditions/Conditions";
import Specifications from "../../components/CarDetailsComponents/Specifications/Specifications";
import Loader from "../../components/Loader/Loader";
import AccesAndFunc from "../../components/CarDetailsComponents/AccesAndFunc/AccesAndFunc";

export default function CarDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCarById(id));
  }, [dispatch, id]);

  const car = useSelector(selectCar);

  if (!car) {
    return <Loader />;
  }

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
      <div className={css.sectionRight}>
        <GeneralInfo
          address={car.address}
          brand={car.brand}
          model={car.model}
          year={car.year}
          description={car.description}
          price={car.rentalPrice}
          mileage={car.mileage}
        />

        <div className={css.lists}>
          <Conditions conditions={car.rentalConditions} />

          <Specifications
            engineSize={car.engineSize}
            consumption={car.fuelConsumption}
            year={car.year}
            type={car.type}
          />

          <AccesAndFunc
            accessories={car.accessories}
            functionalities={car.functionalities}
          />
        </div>
      </div>
    </div>
  );
}
