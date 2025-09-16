import { useSelector } from "react-redux";
import CarCard from "../CarCard/CarCard";
import Button from "../common/Button/Button";
import Loader from "../Loader/Loader";
import NotFoundModal from "../NotFoundModal/NotFoundModal";
import css from "./CatalogList.module.css";
import { selectCarsIsLoading } from "../../redux/cars/selectors";

export default function CatalogList({
  cars,
  favorites,
  filters,
  isLoadingMore,
  hasMore,
  onLoadMore,
}) {
  let sortedItems = [...cars];

  if (filters.sortByFavorites === "top") {
    sortedItems.sort((a, b) => {
      const aFav = favorites.includes(a.id);
      const bFav = favorites.includes(b.id);
      return aFav === bFav ? 0 : aFav ? -1 : 1;
    });
  } else if (filters.sortByFavorites === "bottom") {
    sortedItems.sort((a, b) => {
      const aFav = favorites.includes(a.id);
      const bFav = favorites.includes(b.id);
      return aFav === bFav ? 0 : aFav ? 1 : -1;
    });
  }

  const isLoading = useSelector(selectCarsIsLoading);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {sortedItems && sortedItems.length ? (
        <>
          {" "}
          <ul className={css.catalogList}>
            {" "}
            {sortedItems.map((car) => (
              <li className={css.catalogItem} key={car.id}>
                {" "}
                <CarCard car={car} />{" "}
              </li>
            ))}{" "}
          </ul>{" "}
          {hasMore && (
            <>
              {" "}
              {isLoadingMore ? (
                <Loader />
              ) : (
                //
                <Button
                  type="button"
                  styleType="buttonBorder"
                  name="Load more"
                  onClick={onLoadMore}
                />
              )}{" "}
            </>
          )}{" "}
        </>
      ) : (
        <NotFoundModal message="There are no results with your search parameters... Please, try again..." />
      )}
    </>
  );
}
