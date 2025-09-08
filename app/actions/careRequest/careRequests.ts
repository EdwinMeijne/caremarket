import { unstable_cache } from "next/cache";

export type CareRequest = {
  id: string;
  careType: "household" | "medical";
  startDateTime?: Date;
  endDateTime?: Date;
  clientName?: string;
  additionalInfo?: string;
  status: "pending" | "filled";
};

export const careRequests: CareRequest[] = [
  {
    id: "__FOOBAR___",
    careType: "household",
    clientName: "John Doe",
    status: "pending",
  },
];

export async function getCareRequests() {
  return unstable_cache(async () => careRequests, ["careRequests"])();
}
