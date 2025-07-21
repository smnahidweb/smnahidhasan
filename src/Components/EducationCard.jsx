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
  SSC: <FaSchool className="text-[var(--color-secondary)] text-xl" />,
  HSC: <FaChalkboardTeacher className="text-[var(--color-secondary)] text-xl" />,
  Graduation: <FaUniversity className="text-[var(--color-secondary)] text-xl" />,
};

const iconSizes = [28, 22, 18];

const EducationCard = ({ title, data, align }) => {
  const isLeft = align === "left";
  const TitleIcon =
    titleIcons[title] || <FaGraduationCap className="text-[var(--color-secondary)] text-xl" />;

  return (
    <div
      data-aos="fade-up"
      className={`flex flex-col md:flex-row ${
        isLeft ? "" : "md:flex-row-reverse"
      } items-start md:items-center gap-4 md:gap-6 w-full`}
    >
      {/* Card Content */}
      <div className="w-full md:w-7/12 lg:w-6/12 px-2 sm:px-4">
        <div className="bg-[#1b1b3a] text-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8 border-l-4 border-[var(--color-primary)] space-y-5">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-secondary)] flex items-center gap-3">
            {TitleIcon}
            <span>{title}</span>
          </h3>

          {/* Institute */}
          <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-[var(--color-secondary)]">
            <FaSchool size={20} />
            <span>{data.institute}</span>
          </div>

          {/* Info Fields */}
          <ul className="text-sm sm:text-base space-y-2">
            <li className="flex items-center gap-3">
              <FaFlask className="text-[var(--color-secondary)]" size={20} />
              <strong>Group:</strong> {data.group}
            </li>
            <li className="flex items-center gap-3">
              <FaChartBar className="text-[var(--color-secondary)]" size={20} />
              <strong>Result:</strong> {data.result}
            </li>
            <li className="flex items-center gap-3">
              <FaCalendarAlt className="text-[var(--color-secondary)]" size={20} />
              <strong>Year:</strong> {data.year}
            </li>
          </ul>

          {/* Activities */}
          <div className="space-y-3 pt-3">
            {(Array.isArray(data.activities) ? data.activities : [data.activities]).map(
              (activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-[var(--color-secondary)] "
                >
                  <FaRegLightbulb
                    className="mt-1 text-[var(--color-secondary)]"
                    size={iconSizes[index] || 16}
                  />
                  <span className="text-sm sm:text-base leading-relaxed">{activity}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Timeline Dot (only for md and up) */}
      <div className="hidden md:flex md:w-2/12 justify-center items-center relative">
        <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white text-xl z-10">
          <FaGraduationCap />
        </div>
        <div className="absolute top-10 h-full w-1 bg-white z-0"></div>
      </div>
    </div>
  );
};

export default EducationCard;
