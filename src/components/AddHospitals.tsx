"use client";
import React, { useState } from "react";
import { addDoc } from "firebase/firestore";
import { hospitalsCollectionRef } from "@/lib/firestore.collection";

const AddHospitals = () => {
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name === "") {
      return;
    }
    addDoc(hospitalsCollectionRef, { name })
      .then((res) => {
        console.log(res.id);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    console.log(name);
    setName("");
  }

  return (
    <div>
      <h4>AddHospitals</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Hospital Name</label>
        <input
          id="name"
          type="text"
          placeholder="Hospital Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Hospital</button>
      </form>
    </div>
  );
};

export default AddHospitals;
