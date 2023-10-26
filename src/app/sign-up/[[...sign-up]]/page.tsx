import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="flex justify-center w-full items-center h-[100%] min-h-[100vh] px-6 py-5"><SignUp /></div>;
}