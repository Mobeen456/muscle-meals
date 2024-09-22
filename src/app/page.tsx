import Image from "next/image";
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import PopularFood from "@/components/PopularFood";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
       <Hero/>
       <PopularFood/>
    </div>
  );
}
