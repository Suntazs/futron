import Image from "next/image";
import SplitText from "@/components/anim/text/splitText";
import ShinyText from "@/components/anim/text/shinyText";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="">
            <SplitText
              text="Futron the craft of Digital Solutions"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-zinc-300 font-black leading-tight"
              delay={100}
              duration={1.3}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin=""
              textAlign="left"
            />
          </h1>
          <p className="text-zinc-400 text-lg">
            We are a team of developers, designers, and entrepreneurs who are
            passionate about creating digital solutions that help businesses
            grow.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <ShinyText text="About us" className="text-lg font-medium" />

            <svg
              className="w-4 h-4 text-zinc-300 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-black min-h-[300px] lg:min-h-full"></div>
      </div>
    </div>
  );
}
