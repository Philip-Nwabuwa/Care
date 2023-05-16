import React, { useState } from "react";
import { Hospital } from "@/types/hospital";

interface Props {
  hospitals: Hospital[];
}

const Search = ({ hospitals }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-4">
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search for a hospital"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm.length > 2 && (
        <ul>
          {filteredHospitals.map((hospital) => (
            <li key={hospital.id}>
              <h2>{hospital.name}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
