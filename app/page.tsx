'use client'
import { Navbar } from "@/custom-components/navbar";
import {Hero} from "@/custom-components/Hero";
import Footer from "@/custom-components/footer";
import {Features} from "@/custom-components/Features";
import FAQ from "@/custom-components/FAQ";
import { useTheme } from "@/contexts/ThemeContext";
export default function Home() {
  const { isDark } = useTheme()

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
