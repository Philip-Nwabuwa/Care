"use client";

import React, { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { hospitalsCollectionRef } from "@/lib/firestore.collection";
import Location from "@/components/GetLocation";

type Hospital = {
  id: string;
  name: string;
  address: string;
  phonets: string;
};

const Realtime = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(hospitalsCollectionRef, (snapshot) => {
      setHospitals(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          address: doc.data().address,
          phonets: doc.data().phonets,
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Location />
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            <h2>{hospital.name}</h2>
            {/* <button onClick={() => deleteHospital(hospital.id)}>X</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Realtime;
