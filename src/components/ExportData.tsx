"use client";

import { collection, getDocs } from "firebase/firestore";
import { saveAs } from "file-saver";
import { db } from "@/lib/firebase";
import * as XLSX from "xlsx";

const ExportDataButton = () => {
  const handleExportData = async () => {
    const dbInstance = db;
    const data = await getDocs(collection(dbInstance, "hospitals"));

    const headers = ["Name", "City", "State", "Country"];
    const rows = data.docs.map((doc) => {
      const data = doc.data();
      return [data.name, data.city, data.state, data.country];
    });

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Hospitals Data");
    const excelBlob = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob([excelBlob], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "myData.xlsx");
  };

  return <button onClick={handleExportData}>Export Data</button>;
};

export default ExportDataButton;
