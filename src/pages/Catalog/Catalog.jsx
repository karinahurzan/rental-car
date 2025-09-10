import { useDispatch, useSelector } from "react-redux";
import CarCard from "../../components/CarCard/CarCard";
import css from "./Catalog.module.css";
import { useEffect } from "react";
import { loadCars, setFilters } from "../../redux/carsSlice";
import Loader from "../../components/Loader/Loader";
import { loadBrands } from "../../redux/brandsSlice";
import Select from "react-select";

export default function Catalog() {
  const dispatch = useDispatch();
  const { items, filters, page, isLoading, hasMore } = useSelector(
    (state) => state.cars
  );
  const { items: brands } = useSelector((state) => state.brands);

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

  return (
    <div>
      {items ? (
        <>
          <div className={css.filters}>
            <div className={css.selectWrapper}>
              <label className={css.label} htmlFor="brands">
                Car brand
              </label>
              <Select
                id="brands"
                value={brandsOptions.find(
                  (opt) => opt.value === (filters.brand || "")
                )}
                onChange={(selected) =>
                  dispatch(setFilters({ ...filters, brand: selected.value }))
                }
                options={brandsOptions}
                placeholder="Choose a brand"
                styles={{
                  control: (base) => ({
                    ...base,
                    borderRadius: "12px",
                    padding: "6px",
                    backgroundColor: "var(--inputs)",
                    borderColor: "transparent",
                    fontFamily: "var(--font-family)",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "125%",
                    color: " var(--main)",
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
                      transform: state.selectProps.menuIsOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    },
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                }}
              />
            </div>
            <div className={css.selectWrapper}>
              <label className={css.label} htmlFor="brands">
                Price/1 hour
              </label>
              <Select
                id="brands"
                value={priceOptions.find(
                  (opt) => opt.value === (filters.price || "")
                )}
                onChange={(selected) =>
                  dispatch(setFilters({ ...filters, price: selected.value }))
                }
                options={priceOptions}
                placeholder="Choose a price"
                styles={{
                  control: (base) => ({
                    ...base,
                    borderRadius: "12px",
                    padding: "6px",
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
                      transform: state.selectProps.menuIsOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    },
                  }),
                  indicatorSeparator: () => ({
                    display: "none",
                  }),
                }}
              />
            </div>
          </div>

          <ul className={css.catalogList}>
            {items && items.length
              ? items.map((car) => (
                  <li className={css.catalogItem} key={car.id}>
                    <CarCard car={car} />
                  </li>
                ))
              : null}
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
        <p>No car found...</p>
      )}
    </div>
  );
}
