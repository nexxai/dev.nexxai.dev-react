import SectionTitle from "./SectionTitle";

export default function Mentorship() {
    return (
        <div className="mt-8 text-zinc-300 group">
            <SectionTitle
                title="Mentorship"
                fromColor="from-purple-300"
                viaColor="via-purple-500"
                toColor="to-purple-600"
            />

            <div className="space-y-4 print:text-sm print:text-black">
                <div>
                    I am involved in mentoring 3 other IT professionals as they navigate
                    various challenges in their careers. I provide them each mentoring on
                    various facets of life in technology, from how to maintain work-life
                    balance, to setting goals for their careers, to how to build and lead
                    successful teams.
                </div>
            </div>
        </div>
    );
}
