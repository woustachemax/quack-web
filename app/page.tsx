import Image from "next/image";
import { Navbar } from "@/custom-components/navbar";
import { Hero } from "@/custom-components/Hero";
import { Footer } from "@/custom-components/footer";
import {Features} from "@/custom-components/Features";
import FAQ from "@/custom-components/FAQ";
export default function Home() {
  return (
    <div className="relative bg-stone-900 min-h-screen text-neutral-200">
      <Navbar/>
      <Hero/>
      <Features/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
