import { FaAward } from "react-icons/fa";
import certSGPA from "/spga4.jpg";
import mentorCert1 from "/spring.jpg";
import mentorCert2 from "/summar.jpg";

const awardsData = [
 {
  id: 1,
  title: "Academic Excellence",
  duration: "Summer 2023",
  description:
    "Achieved a perfect SGPA of 4.00 out of 4.00 in the Summer 2023 semester, demonstrating academic dedication and consistent excellence in all enrolled courses. Maintained top grades across all subjects, showing strong discipline and commitment to learning. This award reflects my ability to excel under pressure and deliver high-quality results consistently.",
  image: certSGPA,
}
,
  {
    id: 2,
    title: "Academic Mentor Recognition",
    duration: "Spring 2022",
    description:
      "Recognized for mentoring junior students in C,C++ programming language conducting sessions, guiding projects, and promoting academic growth.",
    image: mentorCert1,
  },
  {
    id: 3,
    title: "Academic Mentor Recognition",
    duration: "Summer 2022",
    description:
      "Honored for guiding peers in backend and frontend technologies like DBMS and MERN stack, through hands-on sessions and real-life projects.",
    image: mentorCert2,
  },
];

const Awards = () => {
  return (
    <section id="awards" className="px-6 md:px-20 py-16 " data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-18 text-[var(--color-primary)] ">
          Award And Mentoring
        </h2>

        <div className="space-y-12">
          {awardsData.map((award, index) => {
            const isEven = index % 2 !== 0;
            return (
              <div
                key={award.id}
                className={`relative flex flex-col ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-6 md:gap-12 bg-[#1b1b3a] border-l-4 border-[var(--color-primary)] text-white p-6 md:p-8 rounded-xl shadow-lg overflow-hidden`}
              >
                {/* Animated Left Border */}
                <div className="absolute top-0 left-0 w-1 h-full  animate-pulse" />

                {/* Left: Description */}
                <div className="flex-1 z-10">
                  <h3 className="text-2xl font-bold flex items-center gap-2 text-[var(--color-primary)] mb-2">
                    <FaAward className="text-[var(--color-primary)]" />
                    {award.title}
                  </h3>
                  <p className="text-sm mb-4 text-gray-300 font-medium">
                    {award.duration}
                  </p>
                  <p className="text-base leading-relaxed text-gray-200">
                    {award.description}
                  </p>
                </div>

                {/* Right: Certificate Image */}
                <div className="w-full md:w-64 h-auto z-10">
                  <img
                    src={award.image}
                    alt="Certificate"
                    className="rounded-lg w-full h-auto object-cover border-2 border-[var(--color-primary)] shadow"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
