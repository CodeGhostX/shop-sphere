import { Button } from "@/components/ui/button";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <div className="flex justify-center mb-4">
        <svg
          className="w-16 h-16 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2l4-4"
          />
        </svg>


        </div>
        <h2 className="text-3xl font-bold text-green-600">Payment Successful!</h2>
        <p className="mt-2 text-gray-600">Thank you for your purchase. Your payment has been processed successfully.</p>
        
        <div className="mt-6">
          <Link href="/">
            <Button>Go to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
