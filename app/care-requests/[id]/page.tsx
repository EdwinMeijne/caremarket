import { Suspense } from "react";
import { getCareRequest } from "@/app/data/careRequest/careRequests";
import CareRequestCard from "@/app/ui/CareRequestCard";

export default async function CareRequest({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const careRequest = await getCareRequest(id);

  if (!careRequest) {
    return <div>Care request not found</div>;
  }

  return (
    <>
      <Suspense fallback={"Loading..."}>
        <CareRequestCard careRequest={careRequest}></CareRequestCard>
      </Suspense>
    </>
  );
}
