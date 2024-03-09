import React from "react";

function Education() {
  const education = [
    {
      id: "1",
      title: "Bachelor of Engineering",
      specialization: "Computer Science",
      duration: "2019 - 2023",
      marks: "9.20 CGPA",
      institute: "Dhole Patil College of Engineering",
    },
    {
      id: "2",
      title: "Higher Secondary Education",
      specialization: "Science",
      duration: "2018 - 2019",
      marks: "66.15%",
      institute: "Nowrosjee Wadia College",
    },
    {
      id: "3",
      title: "Senior Secondary Education",
      specialization: "General",
      duration: "2016 - 2017",
      marks: "84.40%",
      institute: "Loreto Convent School",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[80%] gap-1 mt-8">
      {education.map((item) => {
        return (
          <div
            key={item.id}
            className="group p-4 bg-primary-dark rounded-lg relative flex flex-col justify-center items-center transition"
          >
            <p className="text-xl">{item.title}</p>
            <span className="font-semibold text-secondary">
              ({item.specialization})
            </span>
            <p className="flex group-hover:hidden transition">
              {item.institute}
            </p>
            <p className="text-[#fff5] flex group-hover:hidden transition">
              {item.duration}
            </p>
            <p className="absolute opacity-5 font-bold text-[50px] transition flex group-hover:hidden">
              {item.marks}
            </p>
            <p className="hidden group-hover:flex font-bold text-4xl transition">
              {item.marks}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Education;
