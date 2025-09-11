import Icon from "../../../../public/assets/Icon";
import css from "./Conditions.module.css";

export default function Conditions({ conditions }) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Rental Conditions: </h2>
      <ul className={css.list}>
        {conditions && conditions.length
          ? conditions.map((condition, index) => (
              <li key={index} className={css.item}>
                {<Icon classname={css.checkIcon} name="check-circle" />}{" "}
                {condition}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
