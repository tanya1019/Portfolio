import React from "react";

function Skills() {
  const frontend = [
    {
      id: "1",
      name: "Html CSS",
    },
    {
      id: "1",
      name: "Javascript Typescript",
    },
    {
      id: "1",
      name: "React native",
    },
    {
      id: "1",
      name: "ReactJS AngularJS NextJS",
    },
  ];

  const backend = [
    {
      id: "1",
      name: "NodeJS ExpressJS MongoDB",
    },
    {
      id: "1",
      name: "Python Django Flask",
    },
    {
      id: "1",
      name: "JAVA Springboot PostgresSQL Junit",
    },
    {
      id: "1",
      name: "",
    },
  ];

  const other = [
    {
      id: "1",
      name: "C C++",
    },
    {
      id: "1",
      name: "Pandas Numpy Matplotlib",
    },
    {
      id: "1",
      name: "Firebase Expo Redux",
    },
  ];

  const technicalSkills = [
    // {
    //   category: "Programming languages",
    //   data: [
    //     {
    //       name: "Javascript",
    //       rate: 80,
    //     },
    //     {
    //       name: "Python",
    //       rate: 70,
    //     },
    //     {
    //       name: "Java",
    //       rate: 50,
    //     },
    //     {
    //       name: "C",
    //       rate: 50,
    //     },
    //     {
    //       name: "C++",
    //       rate: 50,
    //     },
    //   ],
    // },
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
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
      {/* <div className="rounded-lg px-20 py-4 shadow-lg bg-[#fff2] hover:bg-secondary cursor-pointer transition-all">
        <h2 className="text-white text-2xl font-semibold mb-4">Frontend</h2>
        {frontend.map((item) => {
          return (
            <div></div>
              <img
                src={require("../assets/css.png")}
                className="w-[20px] h-[20px]"
              />
              <p className="text-white">{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className="rounded-lg px-20 py-4 shadow-lg bg-[#fff2] hover:bg-secondary cursor-pointer transition-all">
        <h2 className="text-white text-2xl font-semibold mb-4">Backend</h2>
        {backend.map((item) => {
          return <div className="text-white">{item.name}</div>;
        })}
      </div>
      <div className="rounded-lg px-20 py-4 shadow-lg bg-[#fff2] hover:bg-secondary cursor-pointer transition-all">
        <h2 className="text-white text-2xl font-semibold mb-4">Others</h2>
        {other.map((item) => {
          return <div className="text-white">{item.name}</div>;
        })}
      </div> */}
      {technicalSkills.map((item) => {
        return (
          <div
            key={item.category}
            className="p-4 rounded-xl bg-primary hover:bg-primary-light transition-all hover:scale-[1.02] hover:[box-shadow:0px_0px_20px#52D3D8] hover:shadow-primary-light gap-2 flex flex-col items-center"
          >
            <p className="text-xl font-bold">{item.category}</p>
            <div className="flex flex-wrap gap-4">
              {item.data.map((data) => {
                return (
                  <div key={data.name}>
                    <p>{data.name}</p>
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
