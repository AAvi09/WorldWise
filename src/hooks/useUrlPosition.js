import { useSearchParams } from "react-router-dom";

export const useUrlPosition = () => {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  // Log the values for debugging
  console.log("Retrieved lat:", lat, "Retrieved lng:", lng);

  // Convert to numbers and handle missing/invalid values
  return {
    lat: lat ? parseFloat(lat) : null,
    lng: lng ? parseFloat(lng) : null,
  };
};
