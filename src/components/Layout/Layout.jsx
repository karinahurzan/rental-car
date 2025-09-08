import styles from "./Layout.module.css";
import { Suspense } from "react";

const Layout = ({ children }) => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <Suspense fallback={"Loading..."}>{children}</Suspense>
        </div>
      </section>
    </>
  );
};

export default Layout;
