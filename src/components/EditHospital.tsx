"use client";
import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const EditHospital = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name === "" || id === "") {
      return;
    }
    const docRef = doc(db, "hospitals", id);
    updateDoc(docRef, { name })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  }

  return (
    <div>
      <h4>EditHospital</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Hospital id</label>
        <input
          className="m-2 p-2 rounded-md"
          id="id"
          type="text"
          placeholder="Hospital id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label htmlFor="name">Hospital Name</label>
        <input
          className="m-2 p-2 rounded-md"
          id="name"
          type="text"
          placeholder="Hospital Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Edit Hospital</button>
      </form>
    </div>
  );
};

export default EditHospital;
