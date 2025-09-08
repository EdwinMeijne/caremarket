import NewCareRequestForm from "@/app/ui/NewCareRequestForm";
import Link from "next/link";

export default function NewCareRequest() {
  return (
    <>
      <Link href="/">BACK</Link>
      <NewCareRequestForm />
    </>
  );
}
