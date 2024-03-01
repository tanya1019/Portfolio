import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Image from "next/image";
import ProfilePhoto from "@/assets/tan.jpeg";

export default function Home() {
  return (
    <div className="h-full min-h-screen w-screen bg-black items-center flex flex-col py-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl font-bold [text-shadow:0px_0px_20px#52D3D8] text-center">
          Software Developer
        </h1>
        <Image
          className="h-40 w-40 rounded-full mt-10"
          src={ProfilePhoto}
          alt="profile_photo"
        />
      </div>
      <div className="flex flex-col items-center mt-10 w-full py-6 bg-primary-dark pb-40">
        <a className="font-light mb-6 text-lg">
          Hi, I am
          <span className="font-bold text-3xl text-white">Tanya!</span>
        </a>
        <a className="font-normal w-[80%] text-center text-[#fff8]">
          I'm a{" "}
          <span className="font-bold text-white">
            {" "}
            {`<Software Developer/>`}
          </span>{" "}
          with a keen interest in creating innovative solutions to real-world
          problems. With 1 year of experience in the field, I've had the
          opportunity to work on diverse projects spanning various domains, from
          web development to mobile applications. I also secured 2nd position in
          the final year engineering exam with a cumulative grade of 9.20 CGPA,
          demonstrating dedication to academic excellence and problem-solving
          abilities.
        </a>
      </div>
      {/* <div>
        <h3 className="text-center text-3xl font-bold text-secondary">
          About Me
        </h3>
        <AboutMe />
      </div> */}
      <div className="-mt-24 flex justify-center">
        {/* <h3 className="text-center text-3xl font-bold text-secondary">
          Skills
        </h3> */}
        <Skills />
      </div>
      <div className="experience"></div>
      <div className="projects"></div>
      <div className="achievements"></div>
      <div className="contact"></div>
    </div>
  );
}
