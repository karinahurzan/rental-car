import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { lazy, Suspense } from "react";

const MainPage = lazy(() => import("./pages/MainPage"));
const Catalog = lazy(() => import("./pages/Catalog"));
const CarDetails = lazy(() => import("./pages/CarDetails"));
const Favourites = lazy(() => import("./pages/Favourites"));

import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <Layout>
          <Suspense fallback={"Loading..."}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/cars" element={<Catalog />} />
              <Route path="/cars/:carsId" element={<CarDetails />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
          </Suspense>
        </Layout>
      </main>
    </div>
  );
}

export default App;
