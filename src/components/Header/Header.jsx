import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Icon from "../../../public/assets/Icon";
import clsx from "clsx";

export default function Header() {
  return (
    <header className={css.headerContainer}>
      <div className={css.headerContent}>
        <Link to={"/"}>
          <Icon name={"rental-car-logo"} classname={css.logoIcon} />
        </Link>

        <nav className={css.navList}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.navLink, { [css.activeNavLink]: isActive })
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(css.navLink, { [css.activeNavLink]: isActive })
            }
            to={"/catalog"}
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
