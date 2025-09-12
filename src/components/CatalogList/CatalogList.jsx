import CarCard from "../CarCard/CarCard";
import Loader from "../Loader/Loader";
import NotFoundModal from "../NotFoundModal/NotFoundModal";
import css from "./CatalogList.module.css";

export default function CatalogList({
  cars,
  favorites,
  filters,
  isLoading,
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
              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type="button"
                  className={css.loadMoreButton}
                  onClick={onLoadMore}
                >
                  {" "}
                  Load more{" "}
                </button>
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
