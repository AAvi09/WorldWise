import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:8000";
const CitiesContext = createContext();
const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

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
  const getCity = async (id) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
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
    <CitiesContext.Provider
      value={{ cities, isLoading, currentCity, setCurrentCity, getCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
};
const useCities = () => {
  const context = useContext(CitiesContext);
  return context;
};

export { CitiesProvider, useCities };
