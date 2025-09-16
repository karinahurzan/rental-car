import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectCarsFilters,
  selectCarsHasMore,
  selectCarsIsLoadingMoreCars,
  selectCarsPage,
} from "../redux/cars/selectors";
import { selectFavorites } from "../redux/favourites/selectors";
import { setFilters } from "../redux/cars/carsSlice";
import { useEffect, useState } from "react";
import CatalogFilters from "../components/CatalogFilters/CatalogFilters";
import CatalogList from "../components/CatalogList/CatalogList";
import { loadCars, loadMoreCars } from "../redux/cars/operations";
import { fetchBrands } from "../utils/getBrands";

export default function Catalog() {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const filters = useSelector(selectCarsFilters);
  const page = useSelector(selectCarsPage);
  const isLoadingMoreCars = useSelector(selectCarsIsLoadingMoreCars);
  const hasMore = useSelector(selectCarsHasMore);

  const favorites = useSelector(selectFavorites);

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    dispatch(loadCars({ filters, page: 1 }));
  }, [dispatch, filters]);

  useEffect(() => {
    fetchBrands()
      .then((data) => setBrands(data))
      .catch((err) => console.error("Error loading brands:", err));
  }, []);

  console.log(brands);

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
