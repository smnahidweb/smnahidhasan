import React from "react";
import {
  FaGraduationCap,
  FaSchool,
  FaUniversity,
  FaChalkboardTeacher,
  FaFlask,
  FaChartBar,
  FaCalendarAlt,
  FaRegLightbulb,
} from "react-icons/fa";

const titleIcons = {
  SSC: <FaSchool className="text-[var(--color-secondary)]" />,
  HSC: <FaChalkboardTeacher className="text-[var(--color-secondary)]" />,
  Graduation: <FaUniversity className="text-[var(--color-secondary)]" />,
};

const EducationCard = ({ title, data, align }) => {
  const isLeft = align === "left";
  const TitleIcon = titleIcons[title] || <FaGraduationCap className="text-[var(--color-secondary)]" />;

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isLeft ? "" : "md:flex-row-reverse"
      } items-center md:items-start`}
    >
      {/* Card Content */}
      <div className="md:w-1/2 p-4">
        <div className="bg-[#1b1b3a] text-white rounded-xl shadow-lg p-6 border-l-4 border-[var(--color-primary)]">
          
          {/* Title with Icon */}
          <h3 className="text-xl font-bold text-[var(--color-secondary)] flex items-center gap-2 mb-2">
            {TitleIcon}
            {title}
          </h3>

          {/* Institute */}
          <p className="text-sm text-[var(--color-secondary)] opacity-80 mb-2 flex items-center gap-2">
            <FaSchool className="text-[var(--color-secondary)]" />
            {data.institute}
          </p>

          {/* Info Fields */}
          <ul className="text-sm mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <FaFlask className="text-[var(--color-secondary)]" />
              <span className="font-semibold text-[var(--color-secondary)]">Group:</span> {data.group}
            </li>
            <li className="flex items-center gap-2">
              <FaChartBar className="text-[var(--color-secondary)]" />
              <span className="font-semibold text-[var(--color-secondary)]">Result:</span> {data.result}
            </li>
            <li className="flex items-center gap-2">
              <FaCalendarAlt className="text-[var(--color-secondary)]" />
              <span className="font-semibold text-[var(--color-secondary)]">Year:</span> {data.year}
            </li>
          </ul>

          {/* Activities */}
          <p className="mt-4 text-[var(--color-secondary)] flex items-start gap-2 leading-relaxed">
            <FaRegLightbulb className="text-[var(--color-secondary)] mt-1" />
            {data.activities}
          </p>
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="flex items-center justify-center md:w-1/12 h-20 relative">
        <div className="w-10 h-10 bg-[#6366F1] rounded-full flex items-center justify-center text-white text-xl z-10">
          <FaGraduationCap />
        </div>
        <div className="absolute h-full w-1 bg-white top-10 z-0"></div>
      </div>
    </div>
  );
};

export default EducationCard;
