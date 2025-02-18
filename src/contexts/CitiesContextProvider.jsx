import { createContext } from "react";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:8000";
const CitiesProvider = ({ children }) => {
  const CitiesContext = createContext();
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCities = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();
      setCities(data);
    } catch {
      alert("there was an error laoding data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);
  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
};

export { CitiesProvider };
