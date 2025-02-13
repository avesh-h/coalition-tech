import { createContext, useContext, useEffect, useState } from "react";

const PatientsDataContext = createContext();

const USERNAME = process.env.REACT_APP_API_USERNAME;
const PASSWORD = process.env.REACT_APP_API_PASSWORD;

export const PatientsDataProvider = ({ children }) => {
  const [patientsData, setPatientsData] = useState([]);
  const [currentPatient, setCurrentPatient] = useState(null);

  const makeApiCall = () => {
    const credentials = btoa(`${USERNAME}:${PASSWORD}`);
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    }).then((response) => {
      response.json().then((data) => {
        setPatientsData(data);
      });
    });
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  return (
    <PatientsDataContext.Provider
      value={{ patientsData, currentPatient, setCurrentPatient }}
    >
      {children}
    </PatientsDataContext.Provider>
  );
};

export const usePatientsData = () => {
  return useContext(PatientsDataContext);
};
