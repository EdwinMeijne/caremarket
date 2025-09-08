import { CareRequest } from "@/app/data/careRequest/careRequests";

export default function CareRequestCard({
  careRequest,
}: {
  careRequest: CareRequest;
}) {
  return (
    <div>
      <p>Client Name: {careRequest.clientName}</p>
      <p>{careRequest.startDateTime?.getDate()}</p>
      <p>{careRequest.endDateTime?.getDate()}</p>
    </div>
  );
}
