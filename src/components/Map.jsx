import React from "react";
import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <h1>map</h1>
      <h1>
        position : lat:{lat},lng:{lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        change pos
      </button>
    </div>
  );
};

export default Map;
