import Image from "next/image";
import { Navbar } from "@/custom-components/navbar";
import { Hero } from "@/custom-components/Hero";
import { Features } from "@/custom-components/Features";
import { Footer } from "@/custom-components/footer";
export default function Home() {
  return (
    <div className="relative bg-stone-900 min-h-screen text-neutral-200 overflow-hidden">
      <Navbar/>
      <Hero/>
      <Features/>
      <Footer/>
    </div>
  );
}
