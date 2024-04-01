import Heading from "../Components/Heading";
import UsesCard from "../Components/Uses/UsesCard";
import Languages from "../Data/Languages";
import Frameworks from "../Data/Frameworks";
import IDEs from "../Data/IDEs";
import Streaming from "../Data/Streaming";

export default function Uses() {
  return (
    <div>
      <Heading title="Uses" />

      <div className="max-w-3xl px-16 mx-auto mb-48 space-y-8 font-medium text-center font-nav text-zinc-300">
        <p className="text-2xl">
          The tools I use every day to make myself feel productive.
        </p>
        <p className="text-sm text-zinc-500">
          Actual productivity may vary based on coffee availability, general
          mood, weather, solar flares, or if Mercury is in retrograde. Please
          consult your doctor before attempting productivity as this could cause
          nervous laughter, restless leg syndrome, unnecessary Amazon purchases,
          or in rare cases, death. Do not use productivity if you are pregnant
          or planning to become pregnant. If you develop a rash on the inside of
          your right knee, please consult your physician. If you develop a rash
          on the inside of your left knee, please consult your physician. If you
          develop a rash on the inside of both knees, please consult your
          physician. If you do not develop a rash on the inside of either knee,
          please consult your physician. Productivity is not recommended for
          children under the age of 18 or adults over the age of 18. 18 year
          olds are probably fine.
        </p>
      </div>

      <div className="w-2/3 mx-auto md:w-1/2">
        <article className="max-w-2xl mx-auto space-y-4 font-sans text-zinc-100">
          <UsesCard left={Languages} right={Frameworks}></UsesCard>
          <UsesCard left={IDEs} right={Streaming}></UsesCard>
        </article>
      </div>
    </div>
  );
}
