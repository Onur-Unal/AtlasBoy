import AnimatedText from "@/components/Animated";
import ConfettiRain from "@/components/Confetti";
import Image from "next/image";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div className="relative min-h-screen overflow-hidden">

      <Image
        src={`${basePath}/atlas.jpg`} 
        alt="Background"
        fill
        priority
        className="object-fit z-0"
      />

   
      <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start justify-center">
          <ConfettiRain />
          <div className="flex flex-row justify-center items-center">
            <AnimatedText />
          </div>
          <div className="flex flex-col pt-[100px] items-center justify-center text-center">
            <h1 className="font-bold text-4xl text-[#178eb3] bg-white/60 px-4 py-2 rounded-md">24 Mayıs Cumartesi</h1>
            <h2 className="font-bold text-[#178eb3] bg-white/70 px-4 py-2 rounded-md">Saat: 12.00-15.00</h2>
            <h2 className="font-bold text-[#178eb3] bg-white/70 px-4 py-2 rounded-md">Voila Event</h2>
            <h3 className="font-bold text-[#178eb3] bg-white/70 px-4 py-2 rounded-md">Beytepe Mah. Beyler Cad. 1643.Sokak No:20</h3>
          </div>
        </main>
      </div>
    </div>
  );
}
