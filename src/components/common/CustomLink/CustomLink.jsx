import { Link } from "react-router-dom";
import css from "./CustomLink.module.css";

export default function CustomLink({ href, minWidth, name }) {
  return (
    <Link
      to={`/${href}`}
      style={{
        minWidth: minWidth,
      }}
      className={css.link}
    >
      {name}
    </Link>
  );
}
