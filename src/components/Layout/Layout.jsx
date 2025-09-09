import Loader from "../Loader/Loader";
import styles from "./Layout.module.css";
import { Suspense } from "react";

const Layout = ({ children }) => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          {/* <Loader /> */}
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </div>
      </section>
    </>
  );
};

export default Layout;
