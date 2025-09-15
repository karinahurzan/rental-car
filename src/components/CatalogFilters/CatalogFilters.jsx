import { useEffect, useState } from "react";
import Select from "react-select";
import clsx from "clsx";
import css from "./CatalogFilters.module.css";
import Button from "../common/Button/Button";

function MileageInput({ value, onChange, placeholder, prefix, side }) {
  const formatNumber = (num) =>
    num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";

  return (
    <input
      className={clsx(css.input, css[side])}
      type="text"
      placeholder={placeholder}
      value={value ? `${prefix} ${formatNumber(value)}` : ""}
      onChange={(e) => {
        const raw = e.target.value.replace(/\D/g, "");
        onChange(raw);
      }}
    />
  );
}

export default function CatalogFilters({ filters, brands, onChangeFilters }) {
  const [localFilters, setLocalFilters] = useState({
    brand: filters.brand || "",
    price: filters.price || "",
    minMileage: filters.minMileage || "",
    maxMileage: filters.maxMileage || "",
    sortByFavorites: filters.sortByFavorites || "none",
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
    onChangeFilters(localFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      brand: "",
      price: "",
      minMileage: "",
      maxMileage: "",
      sortByFavorites: "none",
    };
    setLocalFilters(resetFilters);
    onChangeFilters(resetFilters);
  };

  const brandsOptions = [
    { value: "", label: "Choose a brand" },
    ...brands.map((brand) => ({ value: brand, label: brand })),
  ];

  const priceOptions = [
    { value: "", label: "Choose a price" },
    ...[30, 40, 50, 60, 70, 80].map((num) => ({
      value: num,
      label: num.toString(),
    })),
  ];

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.selectWrapper}>
        <label className={css.label}>Car brand</label>
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
              "&:hover": { borderColor: "transparent" },
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
            indicatorSeparator: () => ({ display: "none" }),
          }}
        />
      </div>

      <div className={css.selectWrapper}>
        <label className={css.label}>Price/1 hour</label>
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
          formatOptionLabel={(option, { context }) =>
            context === "value" && option.value !== ""
              ? `To $${option.value}`
              : option.label
          }
          styles={{
            control: (base) => ({
              ...base,
              borderRadius: "12px",
              padding: "4px",
              backgroundColor: "var(--inputs)",
              boxShadow: "none",
              "&:hover": { borderColor: "transparent" },
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
            indicatorSeparator: () => ({ display: "none" }),
          }}
        />
      </div>

      <div className={css.selectWrapper}>
        <label className={css.label}>Favorites position</label>
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
              "&:hover": { borderColor: "transparent" },
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
            indicatorSeparator: () => ({ display: "none" }),
          }}
        />
      </div>

      <div className={css.inputsWrapper}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.inputs}>
          <MileageInput
            side="left"
            placeholder="From"
            prefix="From"
            value={localFilters.minMileage}
            onChange={(val) =>
              setLocalFilters({ ...localFilters, minMileage: val })
            }
          />
          <MileageInput
            side="right"
            placeholder="To"
            prefix="To"
            value={localFilters.maxMileage}
            onChange={(val) =>
              setLocalFilters({ ...localFilters, maxMileage: val })
            }
          />
        </div>
      </div>

      <Button
        type="submit"
        styleType="buttonBackground"
        name="Search"
        alignSelf="flex-end"
      />
      <Button
        type="reset"
        name="Reset"
        onClick={handleReset}
        styleType="buttonBorder"
        alignSelf="flex-end"
      />
    </form>
  );
}
