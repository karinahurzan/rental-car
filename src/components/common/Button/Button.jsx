import clsx from "clsx";
import css from "./Button.module.css";

export default function Button({ alignSelf, type, name, onClick, styleType }) {
  return (
    <button
      type={type}
      className={clsx(css.button, css[styleType])}
      onClick={onClick}
      style={{
        alignSelf: alignSelf,
      }}
    >
      {name}
    </button>
  );
}
