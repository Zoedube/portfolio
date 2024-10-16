import { projects } from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from "/src/components/CTA";

const Projects = () => {
  return (<section className="max-container">
    <h1 className="head-text">
      My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
    </h1>

    <div className="mt-5 flex flex-col gap-3 text-slate-500">
      <p>
        Although I started coding a year ago, I’ve already embarked on projects that fuel my passion for front-end development and creativity. Each project has been a valuable learning experience, allowing me to explore new technologies, improve my skills, and transform ideas into interactive and engaging web applications.

        I’m continually growing as a developer, and many of my projects reflect my desire to experiment, innovate, and push my own boundaries. Whether it’s building responsive interfaces or working with 3D visualizations using Three.js, I approach each project as an opportunity to refine my craft and learn something new.

        Most of these projects are open-source, and I welcome collaboration from the community. If any of these projects interest you, I’d love for you to explore the code, share your insights, and contribute to their evolution. I’m excited to continue learning, growing, and improving alongside fellow developers who share a passion for creativity and innovation.
      </p>
    </div>

    <div className="flex flex-wrap my-20 gap-16">
      {projects.map((project) => (
        <div className="lg:w-[400px] w-full" key={project.name}>
          <div className="block-container w-12 h-12">
            <div className={`btn-back rounded-xl ${project.theme}`} />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={project.iconUrl}
                alt="Project Icon"
                className="w-2 h-1/2 object-contain" />
            </div>
          </div>

          <div className="mt-5 flex flex-col">
            <h4 className="text-2xl font-poppins font-semibold">
              {project.name}
            </h4>
            <p className="mt-2 text-slate-500">
              {project.description}
            </p>
            <div className="mt-5 flex items-center gap-2 font-poppins">
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600"
              >
                Live Link
              </Link>
              <img
                src={arrow}
                alt="arrow"
                className="w-4 h-4 object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>

    <hr className="border-slate-200" />
    <CTA />
  </section>
  )
}

export default Projects