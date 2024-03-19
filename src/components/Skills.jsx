import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData } from "../utilits";
import useFetchData from "../hooks/useFetchData";

const Skills = ({ dark }) => {
  const { userData, error } = useFetchData();

  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  function getRandomColor() {
    const colors = [
      "rgb(128, 103, 240)",
      "rgb(28, 190, 89)",
      "rgb(247, 80, 35)",
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
  }

  const sortedSkills = userData?.skills?.slice().sort((a, b) => a.sequence - b.sequence);

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_skills">
        <div className="container">
          {userData && userData.skills && (
            <div className="wrapper">
              <div className="left">
                <div
                  className="dizme_tm_main_title wow fadeInUp"
                  data-wow-duration="1s"
                  data-align="left"
                >
                  <span>{userData?.about?.quote}</span>
                  <h3>I Develop Skills Regularly to Keep Me Update</h3>
                  <p>
                    Most common methods for designing websites that work well on
                    desktop is responsive and adaptive design
                  </p>
                </div>
                <div
                  className="dodo_progress wow fadeInUp"
                  data-wow-duration="1s"
                >
                  {sortedSkills.map((skill, i) => (
                      <div
                        className="progress_inner skillsInner___"
                        data-value={skill.percentage}
                        data-color={getRandomColor()}
                        key={i}
                      >
                        <span>
                          <span className="label">{skill.name}</span>
                          <span className="number">{skill.percentage}%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="right">
                <img src={`img/skills/${dark ? 2 : 1}.jpg`} alt="image" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Skills;
