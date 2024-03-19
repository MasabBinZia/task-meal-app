import { Github, Globe, Linkedin } from "lucide-react";

function AboutMePage() {
  return (
    <main className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col space-y-8">
        <div className="max-w-max rounded-full border  p-1 px-3">
          <p className="text-xs font-semibold leading-normal md:text-sm">
            About Me
          </p>
        </div>
        <p className="text-3xl font-bold  md:text-5xl md:leading-10">
          Your Vision, Our Code.
        </p>
        <p className="max-w-4xl text-base md:text-xl">
          👋 Hello there! I'm Masab Bin Zia, a passionate Full-Stack Developer
          with a keen interest in the exciting realm of Web3.0 & AI. If you're
          in search of a dedicated developer proficient in Next.js, TypeScript,
          and full-stack web development, I'd love to connect!
        </p>
        <p className="max-w-4xl text-base md:text-xl">
          🚀 With a solid background in JavaScript frameworks, I bring extensive
          experience in front-end development to the table. My specialization
          lies in crafting responsive web applications that deliver seamless
          user experiences.
        </p>
        <p className="max-w-4xl text-base md:text-xl">
          🔧 I'm dedicated to leveraging my skills to drive a company's mission
          forward. Whether it's spearheading independent projects with efficient
          self-management or collaborating seamlessly within a team, I'm all
          about creating impactful solutions.
        </p>
      </div>
      <div className="mt-16 flex items-center">
        <div className="">
          <p className="text-3xl font-bold  md:text-4xl">Contact Me</p>
          <a
            className=" text-blue-800 font-bold transition-colors duration-500 hover:underline my-4"
            href={`mailto:masabmbz5@gmail.com`}
          >
            masabmbz5@gmail.com
          </a>
          <div className="flex gap-2 mt-2">
            <a
              href={"https://www.linkedin.com/in/masab-bin-zia-411a0922a "}
              target="_blank"
            >
              <Linkedin />
            </a>
            <a href={"https://github.com/MasabBinZia"} target="_blank">
              <Github />
            </a>
            <a href={"https://masab-mbz-portfolio.vercel.app/"} target="_blank">
              <Globe />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutMePage;
