import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import useFetchData from "../hooks/useFetchData";

const Portfolio = () => {
  const { userData, error } = useFetchData();
  const [filterKey, setFilterKey] = useState("*");
  // Popup
  const [popup, setPopup] = useState(false);
  const [popupDetails, setPopupDetails] = useState({});
  // const [filterData, setFilterData] = useState([]);
  const isotope = useRef(null);

  const getTechStacks = [];

  if (userData && userData.projects) {
    userData.projects.forEach((project) => {
      project.techStack.forEach((tech) => {
        const trimmedTech = tech.trim();
        if (!getTechStacks.includes(trimmedTech)) {
          getTechStacks.push(trimmedTech);
        }
      });
    });
  }

  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  useEffect(() => {
    if (userData && userData.projects) {
      // Initialize Isotope
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".grid-item",
          percentPosition: true,
          masonry: {
            columnWidth: ".grid-item",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      }, 500);
    }
  }, [userData]);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "current" : "");

  const handleDetails = (detail) => {
    setPopup(true);
    setPopupDetails(detail);
  };

   const sortedProjects = userData?.projects?.slice().sort((a, b) => a.sequence - b.sequence);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup
        popupDetails={popupDetails}
        open={popup}
        close={() => setPopup(false)}
      />

      {userData && userData?.projects && (
        <div className="dizme_tm_portfolio">
          <div className="container">
            <div className="dizme_tm_main_title" data-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design
              </p>
            </div>
            <div className="portfolio_filter">
              <ul>
                <li>
                  <a
                    className={`c-pointer ${activeBtn("*")}`}
                    onClick={handleFilterKeyChange("*")}
                  >
                    All
                  </a>
                </li>

                {getTechStacks?.map((techStack) => (
                  <li key={techStack}>
                    <a
                      className={`c-pointer ${activeBtn(techStack)}`}
                      onClick={handleFilterKeyChange(techStack)}
                    >
                      {techStack}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dizme_tm_portfolio_titles" />
            <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
              <ul className="gallery_zoom grid">
                {sortedProjects?.map((project) => (
                    <li
                      key={project._id}
                      className={`grid-item ${project?.techStack
                        ?.map((tech) => tech.trim())
                        .join(" ")}`}
                      onClick={() => handleDetails(project)}
                    >
                      <div className="inner">
                        <div
                          className="entry dizme_tm_portfolio_animation_wrap"
                          data-title={project.title}
                          data-category={project?.techStack
                            ?.map((tech) => tech.trim())
                            .join(" ")}
                        >
                          <a className="portfolio_popup" href="#">
                            <img src={project.image.url} alt="image" />
                            <div
                              className="main"
                              data-img-url={project?.image.url}
                            />
                          </a>
                        </div>
                        <div className="mobile_title">
                          <h3>{project?.title}</h3>
                          <span>
                            {project?.techStack &&
                              project.techStack
                                .map((tech) => tech.trim())
                                .join(", ")}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="brush_1 wow zoomIn" data-wow-duration="1s">
            <img src="img/brushes/portfolio/1.png" alt="image" />
          </div>
          <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
            <img src="img/brushes/portfolio/2.png" alt="image" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Portfolio;
