import EditHospital from "@/components/EditHospital";
import ExportDataButton from "@/components/ExportData";
import Hospitals from "@/components/Hospitals";

export default function Home() {
  return (
    <div>
      <main>
        <Hospitals />
        <EditHospital />
        <ExportDataButton />
      </main>
    </div>
  );
}
