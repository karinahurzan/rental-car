import Icon from "../../../../public/assets/Icon";
import css from "./AccesAndFunc.module.css";

export default function AccesAndFunc({ accessories, functionalities }) {
  const generalArray = [...accessories, ...functionalities];

  return (
    <div className={css.container}>
      <h2 className={css.title}>Accessories and functionalities:</h2>

      <ul className={css.list}>
        {generalArray && generalArray.length
          ? generalArray.map((item, index) => (
              <li key={index} className={css.item}>
                {<Icon classname={css.icon} name="check-circle" />}
                {item}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
