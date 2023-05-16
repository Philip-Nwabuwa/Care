"use client";

import React, { useState } from "react";
import { addDoc } from "firebase/firestore";
import { hospitalsCollectionRef } from "@/lib/firestore.collection";

const AddHospitals = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      name === "" ||
      address === "" ||
      phone === "" ||
      city === "" ||
      state === ""
    ) {
      return;
    }
    addDoc(hospitalsCollectionRef, {
      name,
      address,
      phone,
      website,
      city,
      state,
    })
      .then((res) => {
        console.log(res.id);
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    console.log(name, address, phone, website);
    setName("");
    setAddress("");
    setPhone("");
    setWebsite("");
    setCity("");
    setState("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Hospital Name</label>
        <input
          className="m-2 p-2 rounded-md"
          id="name"
          type="text"
          placeholder="Hospital Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="name">Hospital Address</label>
        <input
          className="m-2 p-2 rounded-md"
          id="Address"
          type="text"
          placeholder="Hospital Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <label htmlFor="name">Hospital Phone Number</label>
        <input
          className="m-2 p-2 rounded-md"
          id="Phone"
          type="number"
          placeholder="Hospital Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label htmlFor="name">Hospital Website</label>
        <input
          className="m-2 p-2 rounded-md"
          id="Website"
          type="text"
          placeholder="Hospital Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <br />
        <label htmlFor="name">State</label>
        <input
          className="m-2 p-2 rounded-md"
          id="state"
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="name">City</label>
        <input
          className="m-2 p-2 rounded-md"
          id="city"
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Add Hospital</button>
      </form>
    </div>
  );
};

export default AddHospitals;
