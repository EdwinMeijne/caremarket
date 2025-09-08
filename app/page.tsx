import { Suspense } from "react";
import CareRequestsList from "@/app/ui/CareRequestsList";
import { getCareRequests } from "@/app/data/careRequest/careRequests";

export default async function Home() {
  const careRequests = await getCareRequests();

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CareRequestsList careRequests={careRequests} />
      </Suspense>
    </>
  );
}
