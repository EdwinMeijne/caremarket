import CareRequestForm from "@/app/ui/new-care-request-form";
import CareRequestsList from "@/app/ui/CareRequestsList";
import { getCareRequests } from "@/app/actions/careRequest/careRequests";
import { Suspense } from "react";

const careRequests = await getCareRequests();

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-8">
        Care Request System
      </h1>
      <CareRequestForm />
      <Suspense fallback={<div>Loading...</div>}>
        <CareRequestsList careRequests={careRequests} />
      </Suspense>
    </div>
  );
}
