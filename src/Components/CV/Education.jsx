import SectionTitle from "./SectionTitle";

export default function Education() {
    return (
        <div className="mt-8 text-zinc-300 group pagebreak">
            <SectionTitle
                title="Education"
                fromColor="from-yellow-500"
                toColor="to-red-600"
            />

            <div className="space-y-4 print:text-sm print:text-black">
                {/* <!-- Lighthouse --> */}
                <div>
                    <div className="flex justify-between mb-1 font-sans text-xl">
                        <h4 className="font-semibold">Lighthouse Labs</h4>
                        <span className="block">Aug - Nov 2023</span>
                    </div>
                    <div className="flex justify-between">
                        <h5 className="text-lg">Full Stack Web Development</h5>
                        <span className="block">Diploma</span>
                    </div>
                    <div>
                        <ul className="list-disc">
                            <li>
                                Collaborative development, pair programming, team version
                                control
                            </li>
                            <li>
                                Computer Science fundamentals: OOP, abstraction, recursion,
                                algorithms
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Laracasts --> */}
                <div>
                    <div className="flex justify-between mb-1 font-sans text-xl">
                        <h4 className="font-semibold">Laracasts</h4>
                    </div>
                    <div className="flex justify-between">
                        <h5 className="text-lg">Laravel Architect</h5>
                        <span className="block italic"></span>
                    </div>
                    <div>
                        <ul className="list-disc">
                            <li>
                                PHP foundations, OOP principles, database performance,
                                management and design, Laravel deployment
                            </li>
                            <li>Vue, single page applications, jobs / queues, security</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
