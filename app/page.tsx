import { comingSoon } from "@/content/coming";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 fade-in">
      <div className="text-center max-w-md w-full">

        {/* Logo */}
        <div className="mb-16">
          <Image
            src="/logo.svg"
            alt="CuliLog Logo"
            width={80}
            height={80}
            className="mx-auto"
            priority
          />
        </div>

        {/* Title */}
        <div className="mb-20">
          <h1 className="text-4xl font-semibold text-black mb-6 tracking-tight">
            {comingSoon.title}
          </h1>
          <p className="text-base text-gray-500 font-light">
            {comingSoon.subtitle}
          </p>
        </div>

        {/* Launch info */}
        <p className="text-xs text-gray-400 font-mono mb-8">
          {comingSoon.launch}
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-400 mt-16">
          {comingSoon.copyright}
        </p>

      </div>
    </div>
  );
}
