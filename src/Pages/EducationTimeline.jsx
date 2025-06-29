import React from "react";
import EducationCard from "../Components/EducationCard";


const educationData = {
  Graduation: {
    institute:
      "International University of Business Agriculture and Technology",
    group: "Computer Science & Engineering",
    result: "3.73 out of 4.00",
    year: "4th (Running)",
    activities:
      "Worked on real-life projects, contributed to open-source, and served as a Academy Mentor for junior students.",
  },
  HSC: {
    institute: "Rajshahi Cantonment Board School & College",
    group: "Science",
    result: "5.00 out of 5.00",
    year: "2020",
    activities:
      "Participated in science fairs and seminars. Completed coursework with distinction and actively volunteered in tech clubs.",
  },
  SSC: {
    institute: "Bilkarilla B.M. High School",
    group: "Science",
    result: "5.00 out of 5.00",
    year: "2018",
    activities:
      "Received honors for academic excellence. Engaged in internships with industry-leading companies, gaining hands-on experience in the field of science and technology.",
  },
  
};

const EducationTimeline = () => {
  const educationList = Object.entries(educationData);

  return (
    <section id="education" className=" px-6 md:px-20 py-16">
      {/* Outer Box Like About Section */}
      <div className="w-full max-w-7xl mx-auto border-2 border-[var(--color-primary)] rounded-2xl p-6 md:p-12 shadow-2xl">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[var(--color-primary)]">
            Education Qualification
          </h2>
        </div>

        {/* Timeline Content */}
        <div className="relative space-y-20">
          {educationList.map(([title, data], idx) => (
            <EducationCard
              key={title}
              title={title}
              data={data}
              align={idx % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
