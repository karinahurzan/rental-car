import { BarLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <BarLoader color="#101828" width={150} />;
    </div>
  );
}
