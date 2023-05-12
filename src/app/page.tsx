import AddHospitals from "@/components/AddHospitals";
import EditHospital from "@/components/EditHospital";
import Realtime from "@/components/Realtime";

export default function Home() {
  return (
    <div>
      <main>
        <Realtime />
        <AddHospitals />
        <EditHospital />
      </main>
    </div>
  );
}
