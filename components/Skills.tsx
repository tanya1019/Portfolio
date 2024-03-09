import React from "react";

function Skills() {
  const technicalSkills = [
    {
      category: "Frontend",
      data: [
        {
          name: "ReactJS",
          rate: 80,
        },
        {
          name: "React-Native",
          rate: 80,
        },
        {
          name: "Expo",
          rate: 80,
        },
        {
          name: "AngularJS",
          rate: 40,
        },
        {
          name: "NextJS",
          rate: 80,
        },
        {
          name: "TailwindCSS",
          rate: 80,
        },
        {
          name: "Android studio",
          rate: 50,
        },
        {
          name: "HTML",
          rate: 80,
        },
        {
          name: "CSS",
          rate: 80,
        },
        {
          name: "Typescript",
          rate: 80,
        },
      ],
    },
    {
      category: "Backend",
      data: [
        {
          name: "NodeJS",
          rate: 80,
        },
        {
          name: "ExpressJS",
          rate: 80,
        },
        {
          name: "Spring-boot",
          rate: 80,
        },
        {
          name: "Django",
          rate: 40,
        },
        {
          name: "J-Unit",
          rate: 50,
        },
        {
          name: "Flask",
          rate: 50,
        },
        {
          name: "PostgresSQL",
          rate: 50,
        },
        {
          name: "MongoDB",
          rate: 80,
        },
        {
          name: "MySQL",
          rate: 80,
        },
        {
          name: "Pandas",
          rate: 80,
        },
        {
          name: "Numpy",
          rate: 80,
        },
        {
          name: "Matplotlib",
          rate: 80,
        },
      ],
    },
    {
      category: "Others",
      data: [
        {
          name: "AWS",
          rate: 70,
        },
        {
          name: "Firebase",
          rate: 80,
        },
        {
          name: "Javascript",
          rate: 80,
        },
        {
          name: "Python",
          rate: 70,
        },
        {
          name: "Java",
          rate: 50,
        },
        {
          name: "C",
          rate: 50,
        },
        {
          name: "C++",
          rate: 50,
        },
        {
          name: "Git",
          rate: 80,
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[80%]">
      {technicalSkills.map((item) => {
        return (
          <div
            key={item.category}
            className="p-4 border border-primary-light bg-primary hover:bg-primary-light transition-all hover:[box-shadow:0px_0px_20px#5e70b7] hover:shadow-primary-light gap-2 flex flex-col items-center"
          >
            <p className="text-xl font-bold">{item.category}</p>
            <div className="flex flex-wrap gap-8">
              {item.data.map((data) => {
                return (
                  <div key={data.name}>
                    <p className="text-[#fff8]">{data.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
