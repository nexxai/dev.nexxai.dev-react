import Heading from "../Components/CV/Heading";
import PrintOnly from "../Components/CV/PrintOnly";
import ContactDetails from "../Components/CV/ContactDetails";
import Summary from "../Components/CV/Summary";
import Skills from "../Components/CV/Skills";
import Projects from "../Components/CV/Projects";
import Employment from "../Components/CV/Employment";
import Education from "../Components/CV/Education";
import Mentorship from "../Components/CV/Mentorship";

export default function CV() {
  return (
    <div className="flex justify-center w-screen min-h-screen pt-12 pb-6 mt-8 text-zinc-200">
      <div className="w-2/3 xl:w-1/2 print:w-3/4">
        <section className="relative">
          <Heading />
          <PrintOnly />
        </section>

        <section className="my-16 print:my-8">
          <ContactDetails />
        </section>

        <section className="space-y-10">
          <Summary />

          <Skills />

          <Projects />

          <Employment />

          <Education />

          <Mentorship />
        </section>
      </div>
    </div>
  );
}
