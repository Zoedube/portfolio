import React from 'react';
import { skills, experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "/src/components/CTA";  

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Zoe</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>I’m a front-end developer based in South Africa, currently working at a company specialising in drone technology. While front-end development is where I feel most at home, I also have experience working across the stack, which allows me to build with a broader technical perspective.

My work is strongly design-led. I enjoy crafting intuitive, visually engaging interfaces and thinking deeply about user experience, interaction, and flow. Alongside HTML, CSS, JavaScript, React, and Three.js, I also work with Node.js, Express, and MySQL, giving me the ability to understand and contribute to backend logic, APIs, and data-driven applications.

I’m comfortable collaborating with version control using Git and deploying projects with platforms like Vercel, and I enjoy seeing ideas through from concept to production. Even as a software developer, I’m deeply drawn to UI/UX and design as a whole — it’s where creativity and problem-solving meet in the most meaningful way for me.

Coding is more than just a technical skill in my world; it’s a creative outlet and a way to explore ideas, systems, and possibilities. I’m focused on growth, continuous learning, and staying curious about where this journey will lead. For now, I hope you enjoy exploring my work — and seeing how design and development come together in my portfolio.</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>Software Engineer based in South Africa, specializing in technical education through hands-on learning and building applications.</p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
