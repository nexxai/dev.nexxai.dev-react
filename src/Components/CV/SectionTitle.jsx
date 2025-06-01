import { twMerge } from "tailwind-merge";

export default function SectionTitle({
    title,
    fromColor,
    viaColor = "",
    toColor,
}) {
    return (
        <div className="relative mb-2 text-2xl font-semibold font-heading">
            <div
                className={twMerge(
                    "absolute bottom-0 h-2 px-2 -ml-2 text-transparent transition opacity-60 bg-gradient-to-r  group-hover:transition group-hover:opacity-100 rotate-1 group-hover:-rotate-1 rounded-sm",
                    fromColor,
                    viaColor,
                    toColor,
                )}
            >
                {title}
            </div>
            <div className="absolute z-20 text-transparent print:text-black bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400">
                {title}
            </div>
            <div className="relative z-20 text-transparent">{title}</div>
        </div>
    );
}
