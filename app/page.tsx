import Image from "next/image";
import SplitText from "@/components/anim/text/splitText";
import ShinyText from "@/components/anim/text/shinyText";
import FadeContent from "@/components/anim/fade";
export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        <div className="w-full lg:w-1/2 mt-40 sm:mt-0 flex flex-col justify-center">
          <h1 className="">
            <SplitText
              text="Futron the craft of Digital Solutions"
              className="text-[9vw] sm:text-5xl md:text-6xl lg:text-[70px] text-zinc-300 font-black leading-tight"
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

          <FadeContent
            blur={true}
            duration={400}
            delay={1000}
            initialOpacity={0.3}
            threshold={0.2}
          >
            <p className="text-zinc-400 text-lg">
              We are a team of developers, designers, and entrepreneurs who are
              passionate about creating digital solutions that help businesses
              grow.
            </p>
          </FadeContent>
          <div className="flex flex-nowrap gap-4 flex-row items-center">
            <FadeContent
              blur={true}
              duration={400}
              delay={1100}
              initialOpacity={0.4}
              threshold={0.2}
            >
              <div className="flex items-center gap-[10px] mt-6 border border-zinc-700/50 backdrop-blur-2xl bg-zinc-900/20 rounded-full px-4 py-2">
                <p className="text-zinc-400 text-sm">Trusted by</p>
                <div
                  className="relative flex items-center"
                  style={{ width: "65px", height: "30px" }}
                >
                  <div className="absolute left-0 w-8 h-8 text-sm bg-zinc-700 rounded-full flex items-center justify-center z-30 shadow-lg">
                    KC
                  </div>
                  <div className="absolute left-5 w-8 h-8 text-sm bg-zinc-700 rounded-full flex items-center justify-center z-20 shadow-lg">
                    MC
                  </div>
                  <div className="absolute left-10 w-8 h-8 text-sm bg-zinc-700 rounded-full flex items-center justify-center z-10 shadow-lg">
                    JS
                  </div>
                </div>
              </div>
            </FadeContent>
            <FadeContent
              blur={true}
              duration={400}
              delay={1200}
              initialOpacity={0.4}
              threshold={0.2}
            >
              <div className="flex items-center gap-2 mt-6 h-[44px]">
                <ShinyText text="About us" className="text-lg font-medium" />

                <svg
                  className="w-4 h-4 pt-1 text-zinc-300 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5"
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
            </FadeContent>
          </div>
        </div>
        <div className="w-full lg:w-1/2"></div>
      </div>
    </div>
  );
}
