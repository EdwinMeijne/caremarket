import CareRequestForm from "@/app/ui/new-care-request-form";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-8">
        Care Request System
      </h1>
      <CareRequestForm />
    </div>
  );
}
