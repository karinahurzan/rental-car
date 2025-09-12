import Icon from "../../../../public/assets/Icon";
import css from "./Specifications.module.css";

export default function Specifications({
  year,
  type,
  consumption,
  engineSize,
}) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Car Specifications:</h2>

      <ul className={css.list}>
        <li className={css.item}>
          {<Icon classname={css.icon} name="calendar" />}Year: {year}
        </li>
        <li className={css.item}>
          {<Icon classname={css.icon} name="car" />}Type:{" "}
          {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
        </li>
        <li className={css.item}>
          {<Icon classname={css.icon} name="fuel-pump" />}Fuel Consumption:{" "}
          {consumption}
        </li>
        <li className={css.item}>
          {<Icon classname={css.icon} name="gear" />}Engine Size: {engineSize}
        </li>
      </ul>
    </div>
  );
}
