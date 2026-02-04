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
      These projects represent different points along my journey into front-end development. Each one reflects a stage of exploration, experimentation, and learning as I developed my skills and found my rhythm in building for the web.

Through these projects, I’ve explored everything from responsive interfaces to interactive and 3D experiences, using tools like React and Three.js to bring ideas to life. They showcase not just what I’ve built, but how I think creatively, visually, and with the user experience in mind.

Since starting these projects, I’ve grown significantly as a front-end developer and continued to deepen my understanding of UI/UX and design led development. Many of these works are open-source and reflect my curiosity, willingness to experiment, and desire to push my own boundaries.

I’m excited to keep evolving, learning, and refining my craft and I hope you enjoy exploring and browsing through my work as much as I enjoyed creating it.
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
