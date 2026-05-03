
import Banner from "@/Components/Banner";
import Features from "@/Components/Features";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans mt-10">
      <Banner></Banner>
      <Features></Features>
    </div>
  );
}
