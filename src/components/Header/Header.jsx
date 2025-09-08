import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Icon from "../../../public/assets/Icon";

export default function Header() {
  return (
    <header className={css.headerContainer}>
      <div className={css.headerContent}>
        <Link to={"/"}>
          <Icon name={"rental-car-logo"} classname={css.logoIcon} />
        </Link>

        <nav className={css.navList}>
          <NavLink className={css.navLink} to={"/"}>
            Home
          </NavLink>
          <NavLink className={css.navLink} to={"/cars"}>
            Catalog
          </NavLink>

          <NavLink className={css.navLink} to={"/favourites"}>
            Saved
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
