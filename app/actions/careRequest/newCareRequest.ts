"use server";

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
};

export async function newCareRequest(
  prevState: CareRequestState,
  formData: FormData,
): Promise<CareRequestState> {
  const careType = formData.get("careType") as string;
  const startDateTime = formData.get("startDateTime") as string;
  const endDateTime = formData.get("endDateTime") as string;
  const clientName = formData.get("clientName") as string;
  const additionalInfo = formData.get("additionalInfo") as string;

  const errors: CareRequestState["errors"] = {};

  if (!careType) {
    errors.careType = "Please select a care type";
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
    };
  }

  try {
    console.log("Processing care request:", {
      careType,
      startDateTime,
      endDateTime,
      clientName,
      additionalInfo,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error submitting care request:", error);
    return {
      success: false,
      errors: {
        general: "Failed to submit care request. Please try again.",
      },
    };
  }
}
