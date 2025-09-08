import { CareRequest } from "@/app/actions/careRequest/careRequests";

interface CareRequestsListProps {
  careRequests: CareRequest[];
}

export default function CareRequestsList({
  careRequests,
}: CareRequestsListProps) {
  if (!careRequests || careRequests.length === 0) return <ul></ul>;

  return (
    <ul>
      {careRequests.map((careRequest) => (
        <li key={careRequest.id}>{careRequest.clientName}</li>
      ))}
    </ul>
  );
}
