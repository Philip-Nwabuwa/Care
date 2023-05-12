"use client";

import React, { useEffect, useState } from "react";
import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { hospitalsCollectionRef } from "@/lib/firestore.collection";

interface Hospital {
  id: string;
  name: string;
  location: string;
  // Add more fields as needed
}

function ListHospitals() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    getHospitals();
  }, []);

  function getHospitals() {
    getDocs(hospitalsCollectionRef)
      .then((Response) => {
        const data = Response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Hospital[];
        setHospitals(data);
      })
      .catch((error) => console.log(error.message));
  }

  function deleteHospital(id: string) {
    const docRef = doc(db, "hospitals", id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }
  return (
    <div>
      <h1 className="m-3">List Of Hospitals</h1>
      <button
        className="bg-white text-black p-2 rounded-md m-2"
        onClick={() => getHospitals()}
      >
        Refresh
      </button>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            <h2>{hospital.name}</h2>
            <button onClick={() => deleteHospital(hospital.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListHospitals;
