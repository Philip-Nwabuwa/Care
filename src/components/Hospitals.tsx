"use client";

import React, { useEffect, useState } from "react";
import Search from "@/components/Search";
import { onSnapshot } from "firebase/firestore";
import { hospitalsCollectionRef } from "@/lib/firestore.collection";
import Location from "@/components/GetLocation";

type Hospital = {
  id: string;
  name: string;
  address: string;
  phone: number;
  city: string;
  state: string;
  website: string;
};

const Realtime = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>([]);
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  useEffect(() => {
    const unsubscribe = onSnapshot(hospitalsCollectionRef, (snapshot) => {
      setHospitals(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          address: doc.data().address,
          city: doc.data().city,
          state: doc.data().state,
          phone: doc.data().phone,
          website: doc.data().website,
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleFilter = (searchTerm: string) => {
    const filtered = hospitals.filter((hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHospitals(filtered);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  useEffect(() => {
    if (selectedState === "" && selectedCity === "") {
      setFilteredHospitals([]);
    } else if (selectedState === "") {
      setFilteredHospitals(
        hospitals.filter((hospital) => hospital.city === selectedCity)
      );
    } else if (selectedCity === "") {
      setFilteredHospitals(
        hospitals.filter((hospital) => hospital.state === selectedState)
      );
    } else {
      setFilteredHospitals(
        hospitals.filter(
          (hospital) =>
            hospital.state === selectedState && hospital.city === selectedCity
        )
      );
    }
  }, [selectedState, selectedCity, hospitals]);

  return (
    <div>
      <Location />
      <div className="filter-panel">
        <label htmlFor="state-select">Select State:</label>
        <select
          id="state-select"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="">All</option>
          {/* Add options for different states */}
          <option value="">Delta</option>
        </select>
        <label htmlFor="city-select">Select City:</label>
        <select
          id="city-select"
          value={selectedCity}
          onChange={handleCityChange}
        >
          <option value="">All</option>
          {/* Add options for different cities */}
          <option value="">Asaba</option>
        </select>
      </div>
      <Search hospitals={hospitals} />
      <ul>
        {filteredHospitals.length > 0
          ? filteredHospitals.map((hospital) => (
              <li className="m-3" key={hospital.id}>
                <h2>{hospital.name}</h2>
                <p>{hospital.address}</p>
                <p>{hospital.phone}</p>
                <p>{hospital.city}</p>
                <p>{hospital.state}</p>
                <p>{hospital.website}</p>
              </li>
            ))
          : hospitals.map((hospital) => (
              <li className="m-3" key={hospital.id}>
                <h2>{hospital.name}</h2>
                <p>{hospital.address}</p>
                <p>{hospital.phone}</p>
                <p>{hospital.city}</p>
                <p>{hospital.state}</p>
                <p>{hospital.website}</p>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Realtime;
