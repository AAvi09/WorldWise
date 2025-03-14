import { useSearchParams } from "react-router-dom";

export const urlPosition = () => {
  const [searchParams] = useSearchParams();
  const Lat = searchParams.get("lat");
  const Lng = searchParams.get("lng");

  return { Lat, Lng };
};
