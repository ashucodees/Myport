import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="text-2xl font-bold">Welcome to My Port</div>
      
      <div className="text-lg text-gray-600">Explore my portfolio and projects.</div>
    </div>
  );
}
