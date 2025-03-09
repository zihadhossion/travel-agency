import Hero from "@/components/home/hero/Hero";
import Home from "../components/home/Home";

export default function page() {
  return (
    <div className="bg-amber-50 text-blue-500">
      <Home />
      <Hero />
    </div>
  );
}
