import SectionTitle from "./SectionTitle";

export default function Summary() {
    return (
        <div className="z-10 mt-8 text-zinc-300 group">
            <SectionTitle
                title="Summary"
                fromColor="from-blue-400"
                toColor="to-blue-600"
            />
            <p className="text-lg text-justify print:text-sm print:text-black">
                I am pivoting from a 20+ year career in enterprise architecture, DevOps,
                infrastructure management, and leadership after discovering a new love
                for programming. I have always dabbled in coding in various side
                projects and recently realized that my true passion is in directly
                bringing new ideas to life. I am extremely excited to start this next
                chapter of my life and am eager to work on projects that make the world
                a better place.
            </p>
        </div>
    );
}
