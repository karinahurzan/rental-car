import { useDispatch, useSelector } from "react-redux";
import CarCard from "../../components/CarCard/CarCard";
import css from "./Catalog.module.css";
import { useEffect, useState } from "react";
import { loadCars, setFilters } from "../../redux/carsSlice";
import Loader from "../../components/Loader/Loader";
import { loadBrands } from "../../redux/brandsSlice";
import Select from "react-select";
import clsx from "clsx";
import NotFoundModal from "../../components/NotFoundModal/NotFoundModal";

export default function Catalog() {
  const dispatch = useDispatch();
  const { items, filters, page, isLoading, hasMore } = useSelector(
    (state) => state.cars
  );

  const { items: brands } = useSelector((state) => state.brands);
  const { items: favorites } = useSelector((state) => state.favorites);

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      dispatch(loadCars({ filters, page: page + 1 }));
    }
  };

  useEffect(() => {
    dispatch(loadCars({ filters, page: 1 }));
    dispatch(loadBrands());
  }, [dispatch, filters]);

  const brandsOptions = [
    { value: "", label: "Choose a brand" },
    ...brands.map((brand) => ({ value: brand, label: brand })),
  ];

  const priceOptions = [
    { value: "", label: "Choose a price" },
    ...[30, 40, 50, 60, 70, 80].map((num) => ({
      value: num,
      label: `To $${num}`,
    })),
  ];

  const [localFilters, setLocalFilters] = useState({
    brand: filters.brand || "",
    price: filters.price || "",
    minMileage: filters.minMileage || "",
    maxMileage: filters.maxMileage || "",
    sortByFavorites: "none",
  });

  useEffect(() => {
    setLocalFilters({
      brand: filters.brand || "",
      price: filters.price || "",
      minMileage: filters.minMileage || "",
      maxMileage: filters.maxMileage || "",
      sortByFavorites: filters.sortByFavorites || "none",
    });
  }, [filters]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilters(localFilters));
    dispatch(loadCars({ filters: localFilters, page: 1 }));
  };

  const handleReset = () => {
    const resetFilters = {
      brand: "",
      price: "",
      minMileage: "",
      maxMileage: "",
    };

    setLocalFilters(resetFilters);
    dispatch(setFilters(resetFilters));
    dispatch(loadCars({ filters: resetFilters, page: 1 }));
  };

  let sortedItems = [...items];

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
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.selectWrapper}>
          <label className={css.label} htmlFor="brands">
            Car brand
          </label>
          <Select
            id="brands"
            value={brandsOptions.find(
              (opt) => opt.value === (localFilters.brand || "")
            )}
            onChange={(selected) =>
              setLocalFilters({ ...localFilters, brand: selected.value })
            }
            options={brandsOptions}
            placeholder="Choose a brand"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "12px",
                padding: "4px",
                backgroundColor: "var(--inputs)",
                borderColor: "transparent",
                fontFamily: "var(--font-family)",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "125%",
                color: "var(--main)",
                width: "100%",
                minWidth: "204px",
                boxShadow: "none",
                "&:hover": {
                  borderColor: "transparent",
                },
              }),
              menu: (base) => ({
                ...base,
                borderRadius: "12px",
                boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
                backgroundColor: "var(--white)",
                width: "100%",
                minWidth: "204px",
                padding: "14px 18px",
                border: "1px solid var(--inputs)",
              }),
              option: (base, state) => ({
                ...base,
                fontFamily: "var(--font-family)",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "125%",
                backgroundColor: "none",
                color: state.isFocused ? "var(--main)" : "var(--gray)",
                cursor: "pointer",
              }),
              indicatorsContainer: (base, state) => ({
                ...base,

                svg: {
                  color: " var(--main)",
                  transform: state.selectProps.menuIsOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                },
              }),
              indicatorSeparator: () => ({
                display: "none",
              }),
            }}
          />
        </div>
        <div className={css.selectWrapper}>
          <label className={css.label} htmlFor="price">
            Price/1 hour
          </label>
          <Select
            id="price"
            value={priceOptions.find(
              (opt) => opt.value === (localFilters.price || "")
            )}
            onChange={(selected) =>
              setLocalFilters({ ...localFilters, price: selected.value })
            }
            options={priceOptions}
            placeholder="Choose a price"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "12px",
                padding: "4px",
                backgroundColor: "var(--inputs)",
                boxShadow: "none",
                "&:hover": {
                  borderColor: "transparent",
                },

                borderColor: "transparent",
                fontFamily: "var(--font-family)",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "125%",
                color: " var(--main)",
                width: "100%",
                minWidth: "196px",
              }),
              menu: (base) => ({
                ...base,
                borderRadius: "12px",
                boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
                backgroundColor: "var(--white)",
                width: "100%",
                minWidth: "196px",
                padding: "14px 18px",
                border: "1px solid var(--inputs)",
              }),
              option: (base, state) => ({
                ...base,
                fontFamily: "var(--font-family)",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "125%",
                backgroundColor: "none",
                color: state.isFocused ? "var(--main)" : "var(--gray)",
                cursor: "pointer",
              }),
              indicatorsContainer: (base, state) => ({
                ...base,
                svg: {
                  color: " var(--main)",
                  transform: state.selectProps.menuIsOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                },
              }),
              indicatorSeparator: () => ({
                display: "none",
              }),
            }}
          />
        </div>
        <div className={css.selectWrapper}>
          <label className={css.label} htmlFor="favorites">
            Favorites position
          </label>
          <Select
            id="favorites"
            value={[
              { value: "none", label: "Default" },
              { value: "top", label: "On top" },
              { value: "bottom", label: "At bottom" },
            ].find((opt) => opt.value === localFilters.sortByFavorites)}
            onChange={(selected) =>
              setLocalFilters({
                ...localFilters,
                sortByFavorites: selected.value,
              })
            }
            options={[
              { value: "none", label: "Default" },
              { value: "top", label: "On top" },
              { value: "bottom", label: "At bottom" },
            ]}
            placeholder="Sort by favorites"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "12px",
                padding: "4px",
                backgroundColor: "var(--inputs)",
                boxShadow: "none",
                "&:hover": {
                  borderColor: "transparent",
                },

                borderColor: "transparent",
                fontFamily: "var(--font-family)",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "125%",
                color: " var(--main)",
                width: "100%",
                minWidth: "150px",
              }),
              menu: (base) => ({
                ...base,
                borderRadius: "12px",
                boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
                backgroundColor: "var(--white)",
                width: "100%",
                minWidth: "196px",
                padding: "14px 18px",
                border: "1px solid var(--inputs)",
              }),
              option: (base, state) => ({
                ...base,
                fontFamily: "var(--font-family)",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "125%",
                backgroundColor: "none",
                color: state.isFocused ? "var(--main)" : "var(--gray)",
                cursor: "pointer",
              }),
              indicatorsContainer: (base, state) => ({
                ...base,
                svg: {
                  color: " var(--main)",
                  transform: state.selectProps.menuIsOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                },
              }),
              indicatorSeparator: () => ({
                display: "none",
              }),
            }}
          />
        </div>

        <div className={css.inputsWrapper}>
          <label className={css.label} htmlFor="mileage">
            Car mileage / km
          </label>

          <div className={css.inputs}>
            <input
              className={clsx(css.input, css.left)}
              placeholder="From"
              type="number"
              name="minMileage"
              id="mileage"
              onChange={(e) =>
                setLocalFilters({
                  ...localFilters,
                  minMileage: e.target.value,
                })
              }
              value={localFilters.minMileage || ""}
            />
            <input
              className={clsx(css.input, css.right)}
              placeholder="To"
              type="number"
              name="maxMileage"
              onChange={(e) =>
                setLocalFilters({
                  ...localFilters,
                  maxMileage: e.target.value,
                })
              }
              value={localFilters.maxMileage || ""}
            />
          </div>
        </div>

        <button className={css.searchButton} type="submit">
          Search
        </button>

        <button onClick={handleReset} className={css.resetButton} type="reset">
          Reset
        </button>
      </form>
      {items && items.length ? (
        <>
          <ul className={css.catalogList}>
            {sortedItems.map((car) => (
              <li className={css.catalogItem} key={car.id}>
                <CarCard car={car} />
              </li>
            ))}
          </ul>

          {hasMore && (
            <>
              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type="button"
                  className={css.loadMoreButton}
                  onClick={handleLoadMore}
                >
                  Load more
                </button>
              )}
            </>
          )}
        </>
      ) : (
        <NotFoundModal message="There are no results with your search parameters... Please, try again..." />
      )}
    </div>
  );
}
