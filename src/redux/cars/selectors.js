export const selectCars = (state) => state.cars.items;
export const selectCarsFilters = (state) => state.cars.filters;
export const selectCarsPage = (state) => state.cars.page;
export const selectCarsIsLoading = (state) => state.cars.isLoading;
export const selectCarsIsLoadingMoreCars = (state) =>
  state.cars.isLoadingMoreCars;

export const selectCarsHasMore = (state) => state.cars.hasMore;
export const selectCar = (state) => state.cars.car;
