import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectCarsFilters,
  selectCarsHasMore,
  selectCarsIsLoadingMoreCars,
  selectCarsPage,
} from "../redux/cars/selectors";
import { selectBrands } from "../redux/brands/selectors";
import { selectFavorites } from "../redux/favourites/selectors";
import { setFilters } from "../redux/cars/carsSlice";
import { loadBrands } from "../redux/brands/brandsSlice";
import { useEffect } from "react";
import CatalogFilters from "../components/CatalogFilters/CatalogFilters";
import CatalogList from "../components/CatalogList/CatalogList";
import Loader from "../components/Loader/Loader";
import { loadCars, loadMoreCars } from "../redux/cars/operations";

export default function Catalog() {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const filters = useSelector(selectCarsFilters);
  const page = useSelector(selectCarsPage);
  const isLoadingMoreCars = useSelector(selectCarsIsLoadingMoreCars);
  const hasMore = useSelector(selectCarsHasMore);

  const brands = useSelector(selectBrands);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(loadCars({ filters, page: 1 }));
    dispatch(loadBrands());
  }, [dispatch, filters]);

  const handleSetFilters = (newFilters) => {
    dispatch(setFilters(newFilters));
  };

  const handleLoadMore = () => {
    if (!isLoadingMoreCars && hasMore) {
      dispatch(loadMoreCars({ filters, page: page + 1 }));
    }
  };

  return (
    <div>
      <CatalogFilters
        filters={filters}
        brands={brands}
        onChangeFilters={handleSetFilters}
      />
      <CatalogList
        cars={cars}
        favorites={favorites}
        filters={filters}
        isLoadingMore={isLoadingMoreCars}
        hasMore={hasMore}
        onLoadMore={handleLoadMore}
      />
    </div>
  );
}
