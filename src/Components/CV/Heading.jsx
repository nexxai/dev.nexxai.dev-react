export default function Heading() {
  return (
    <div className="">
      <div className="absolute inset-0 transition -z-10 duration-1000">
        <div className="w-full h-full text-white rounded-full blur-3xl bg-white/10 opacity-40"></div>
      </div>
      <div className="text-center">
        <h1 className="mt-16 text-5xl font-bold text-transparent md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-b from-white/50 to-white font-heading print:text-black print:mt-8">
          JT Smith
        </h1>
      </div>
      <div className="text-center">
        <h2 className="mt-8 text-3xl font-bold tracking-wide uppercase md:text-4xl font-heading print:text-black print:mb-8">
          Full stack web developer
        </h2>
      </div>
    </div>
  );
}
