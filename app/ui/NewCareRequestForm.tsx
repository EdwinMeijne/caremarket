"use client";

import { useActionState } from "react";
import {
  CareRequestState,
  newCareRequest,
} from "@/app/actions/careRequest/newCareRequest";

const initialState: CareRequestState = {
  success: false,
};

export default function NewCareRequestForm() {
  const [state, formAction, pending] = useActionState(
    newCareRequest,
    initialState,
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">New Care Request</h2>

      {state.success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Care request submitted successfully!
        </div>
      )}

      {state.errors?.general && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {state.errors.general}
        </div>
      )}

      <form action={formAction} className="space-y-4">
        <div>
          <label
            htmlFor="careType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Care Type*
          </label>
          <select
            id="careType"
            name="careType"
            className={`w-full p-2 border rounded-md ${
              state.errors?.careType ? "border-red-500" : "border-gray-300"
            }`}
            defaultValue={(state.formData?.get("careType") || "") as string}
          >
            <option value="" disabled>
              Select care type
            </option>
            <option value="household">Household</option>
            <option value="medical">Medical</option>
          </select>
          {state.errors?.careType && (
            <p className="mt-1 text-sm text-red-600">{state.errors.careType}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="startDateTime"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Start Date and Time*
          </label>
          <input
            type="datetime-local"
            id="startDateTime"
            name="startDateTime"
            className={`w-full p-2 border rounded-md ${
              state.errors?.startDateTime ? "border-red-500" : "border-gray-300"
            }`}
            defaultValue={
              (state.formData?.get("startDateTime") || "") as string
            }
          />
          {state.errors?.startDateTime && (
            <p className="mt-1 text-sm text-red-600">
              {state.errors.startDateTime}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="endDateTime"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            End Date and Time*
          </label>
          <input
            type="datetime-local"
            id="endDateTime"
            name="endDateTime"
            className={`w-full p-2 border rounded-md ${
              state.errors?.endDateTime ? "border-red-500" : "border-gray-300"
            }`}
            defaultValue={(state.formData?.get("endDateTime") || "") as string}
          />
          {state.errors?.endDateTime && (
            <p className="mt-1 text-sm text-red-600">
              {state.errors.endDateTime}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="clientName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Client Name*
          </label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            placeholder="Enter client name"
            className={`w-full p-2 border rounded-md ${
              state.errors?.clientName ? "border-red-500" : "border-gray-300"
            }`}
            defaultValue={(state.formData?.get("clientName") || "") as string}
          />
          {state.errors?.clientName && (
            <p className="mt-1 text-sm text-red-600">
              {state.errors.clientName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="additionalInfo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={4}
            placeholder="Enter any additional details or special requirements"
            className="w-full p-2 border border-gray-300 rounded-md"
            defaultValue={
              (state.formData?.get("additionalInfo") || "") as string
            }
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            disabled={pending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
          >
            Submit care request
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-2">* Required fields</p>
      </form>
    </div>
  );
}
