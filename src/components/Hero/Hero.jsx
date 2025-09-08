import css from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={css.hero}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.mainText}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <button className={css.button}>View Catalog</button>
    </div>
  );
}
