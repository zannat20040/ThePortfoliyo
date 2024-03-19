import useFetchData from "../hooks/useFetchData";
import Counter from "./Counter";
const About = ({ dark }) => {
  const { userData, error } = useFetchData();

  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          {userData && (
            <div className="wrapper">
              <div className="left">
                <div className="image">
                  <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" />
                  <div className="numbers year">
                    <div className="wrapper">
                      <h3>
                        <Counter end={userData?.about?.exp_year} />
                      </h3>
                      <span className="name">
                        Years of
                        <br />
                        Success
                      </span>
                    </div>
                  </div>
                  <div className="numbers project">
                    <div className="wrapper">
                      <h3>
                        <Counter end={userData?.about?.some_total} />
                      </h3>
                      <span className="name">
                        Total
                        <br />
                        Projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="title wow fadeInUp" data-wow-duration="1s">
                  <span>I'm a {userData?.about?.title}</span>
                  <h3>{userData?.about?.subTitle}</h3>
                </div>
                <div className="text wow fadeInUp" data-wow-duration="1s">
                  <p>{userData?.about?.description}</p>
                </div>
                <div
                  className="dizme_tm_button wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <a className="anchor" href="#contact">
                    <span>Hire Me</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
