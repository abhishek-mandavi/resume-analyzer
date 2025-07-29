import { Link } from "react-router";
import ScoreCircle from "~/components/ScoreCircle";

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {


    return (
        <Link
            to={`/resume/${id}`}
            className="resume-card group block overflow-hidden rounded-2xl shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-neutral-900"
            >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex flex-col gap-1">
                {companyName ? (
                    <h2 className="text-lg font-semibold text-black dark:text-white break-words">{companyName}</h2>
                ) : (
                    <h2 className="text-lg font-semibold text-black dark:text-white">Resume</h2>
                )}
                {jobTitle && (
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 break-words">{jobTitle}</h3>
                )}
                </div>

                {/* Score Circle */}
                <div className="flex-shrink-0">
                <ScoreCircle score={feedback?.overallScore ?? 0} />
                </div>
            </div>

            {/* Resume Preview */}
            <div className="gradient-border overflow-hidden">
                <img
                src={imagePath}
                alt={`Resume Preview - ${companyName || "Unnamed"}`}
                className="w-full h-[350px] max-sm:h-[200px] object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
            </div>
        </Link>

 
    )
}
export default ResumeCard