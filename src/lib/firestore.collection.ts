import { collection } from "firebase/firestore";
import { db } from "./firebase";

export const hospitalsCollectionRef = collection(db, "hospitals");
