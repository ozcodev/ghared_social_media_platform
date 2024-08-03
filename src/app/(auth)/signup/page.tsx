import { Metadata } from "next";
import SignUp_bg from "@/assets/sign_up_bg.png";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./signUpForm";


export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign up to Ghared</h1>
            <p className="text-muted-foreground">
              Place where you can ghareds{" "}
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <Link href="/login" className="block text-center hover:underline">
              already have an account?
            </Link>
          </div>
        </div>
        <Image
          src={SignUp_bg}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
