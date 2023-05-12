import AddHospitals from "@/components/AddHospitals";
import EditHospital from "@/components/EditHospital";
import ExportDataButton from "@/components/ExportData";
import Realtime from "@/components/Realtime";

export default function Home() {
  return (
    <div>
      <main>
        <Realtime />
        <AddHospitals />
        <EditHospital />
        <ExportDataButton />
      </main>
    </div>
  );
}
