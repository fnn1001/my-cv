import { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_skills">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>My Skills</span>
            <h3>I Develop Skills Regularly</h3>
            <p>
              Here&apos;s a showcase of my skills, constantly evolving and improving.
            </p>
          </div>
          <div className="skills_wrapper">
            <div className="left">
              <div className="dodo_progress">
                {/* Skill: ReactJS */}
                <div
                  className="skillsInner___ progress_inner"
                  data-value={90}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">ReactJS</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>

                {/* Skill: Node.js */}
                <div
                  className="skillsInner___ progress_inner"
                  data-value={85}
                  data-color="#10ac84"
                >
                  <span>
                    <span className="label">Node.js</span>
                    <span className="number">85%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>

                {/* Skill: MongoDB */}
                <div
                  className="skillsInner___ progress_inner"
                  data-value={80}
                  data-color="#ee5253"
                >
                  <span>
                    <span className="label">Bootstrap</span>
                    <span className="number">80%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right">
              {/* Skill: TypeScript */}
              <div
                className="skillsInner___ progress_inner"
                data-value={75}
                data-color="#007acc"
              >
                <span>
                  <span className="label">TypeScript</span>
                  <span className="number">75%</span>
                </span>
                <div className="background">
                  <div className="bar">
                    <div className="bar_in" />
                  </div>
                </div>
              </div>

              {/* Skill: JavaScript */}
              <div
                className="skillsInner___ progress_inner"
                data-value={90}
                data-color="#f0db4f"
              >
                <span>
                  <span className="label">JavaScript</span>
                  <span className="number">90%</span>
                </span>
                <div className="background">
                  <div className="bar">
                    <div className="bar_in" />
                  </div>
                </div>
              </div>

              {/* Skill: MySQL */}
              <div
                className="skillsInner___ progress_inner"
                data-value={70}
                data-color="#00758f"
              >
                <span>
                  <span className="label">MySQL</span>
                  <span className="number">70%</span>
                </span>
                <div className="background">
                  <div className="bar">
                    <div className="bar_in" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
