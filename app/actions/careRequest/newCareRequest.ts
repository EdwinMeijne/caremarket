"use server";

import { CareRequest, careRequests } from "@/app/data/careRequest/careRequests";
import { revalidateTag } from "next/cache";

export type CareType = "household" | "medical";
const VALID_CARE_TYPES = ["household", "medical"] as const;

function isCareType(value: string): value is CareType {
  return VALID_CARE_TYPES.includes(value as CareType);
}

export type CareRequestState = {
  success: boolean;
  errors?: {
    careType?: string;
    startDateTime?: string;
    endDateTime?: string;
    clientName?: string;
    additionalInfo?: string;
    general?: string;
  };
  formData?: FormData;
};

export async function newCareRequest(
  prevState: CareRequestState,
  formData: FormData,
): Promise<CareRequestState> {
  const careType = formData.get("careType") as CareType;
  const startDateTime = formData.get("startDateTime") as string;
  const endDateTime = formData.get("endDateTime") as string;
  const clientName = formData.get("clientName") as string;
  const additionalInfo = formData.get("additionalInfo") as string;

  const errors: CareRequestState["errors"] = {};

  if (!careType && !isCareType(careType)) {
    errors.careType = "Please select a valid care type";
  }

  if (!startDateTime) {
    errors.startDateTime = "Start date and time is required";
  }

  if (!endDateTime) {
    errors.endDateTime = "End date and time is required";
  }

  if (
    startDateTime &&
    endDateTime &&
    new Date(startDateTime) >= new Date(endDateTime)
  ) {
    errors.endDateTime = "End time must be after start time";
  }

  if (!clientName?.trim()) {
    errors.clientName = "Client name is required";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
      formData,
    };
  }

  const newCareRequest: CareRequest = {
    id: crypto.randomUUID(),
    careType,
    startDateTime: new Date(startDateTime),
    endDateTime: new Date(endDateTime),
    clientName,
    additionalInfo,
    status: "pending",
  };

  careRequests.push(newCareRequest);

  // Refresh the cached list of care requests
  revalidateTag("careRequests");

  return {
    success: true,
  };
}
