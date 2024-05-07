import { GoSignOut } from "react-icons/go";
import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";
import { useEffect } from "react";

export default function Home() {
  const { authUser, isLoading, signOut } = useAuth();
  console.log(authUser);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push("/login");
    }
  }, [authUser, isLoading]);
  return !authUser ? (
    <Loader />
  ) : (
    <main className="">
      <div className="max-w-3xl mx-auto mt-10 p-8">
        <div className="bg-white -m-6 p-3 sticky top-0">
          <div className="flex justify-center flex-col items-center">
            <span className="text-5xl md:text-7xl font-bold">
              Welcome Back !
            </span>
            <h1 className="text-5xl md:text-7xl font-bold  p-10">
              {authUser.username}
            </h1>
          </div>
        </div>
      </div>
      <div
        className="bg-black text-white w-44 py-4 mt-10 rounded-lg transition-transform hover:bg-black/[0.8] active:scale-90 flex items-center justify-center gap-2 font-medium shadow-md fixed bottom-5 right-5 cursor-pointer"
        onClick={signOut}
      >
        <GoSignOut size={18} />
        <span>Logout</span>
      </div>
    </main>
  );
}
