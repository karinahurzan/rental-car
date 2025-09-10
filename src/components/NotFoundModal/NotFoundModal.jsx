import css from "./NotFoundModal.module.css";

export default function NotFoundModal({ message }) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Not Found</h2>
      <p className={css.message}>{message}</p>
    </div>
  );
}
