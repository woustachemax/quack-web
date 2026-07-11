'use client'
import { Navbar } from "@/custom-components/navbar";
import { Hero } from "@/custom-components/Hero";
import Footer from "@/custom-components/footer";
import { Features } from "@/custom-components/Features";
import { Providers } from "@/custom-components/Providers";
import FAQ from "@/custom-components/FAQ";

export default function Home() {
  return (
    <div className="relative bg-stone-50 min-h-screen text-stone-900">
      <Navbar/>
      <Hero/>
      <Features/>
      <Providers/>
      <FAQ/>
      <Footer/>
    </div>
  );
}