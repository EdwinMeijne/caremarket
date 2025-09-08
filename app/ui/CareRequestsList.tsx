import { CareRequest } from "@/app/data/careRequest/careRequests";
import Link from "next/link";
import CareRequestCard from "@/app/ui/CareRequestCard";

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
        <li key={careRequest.id}>
          <CareRequestCard careRequest={careRequest}></CareRequestCard>
          <Link href={`/care-requests/${careRequest.id}`}>More info</Link>
        </li>
      ))}
    </ul>
  );
}
