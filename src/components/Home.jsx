import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import useFetchData from "../hooks/useFetchData";


const Home = ({ dark }) => {
  const [data, setData] = useState({});
   useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fatchData("/static/info.json");
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const { userData, error } = useFetchData();

  return (
    <div className="dizme_tm_section" id="home">
    <div className="dizme_tm_hero">
      <div
        className="background"
        data-img-url={`img/slider/${dark ? 2 : 1}.jpg`}
      // style={{ backgroundImage: `img/slider/${dark ? 2 : 1}.jpg` }}
      />
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="hello">
              <h3 className="orangeText">{`Hello, I'm `}</h3>
            </div>
            <div className="name">
              <h3>{userData && userData?.about.name ? userData?.about?.name : "name"}</h3>
            </div>
            <div className="job">
              <p>
                A <span className="greenText">{userData && userData?.about?.title}</span>{" "}
                From <span className="purpleText">{userData?.about?.address}</span>
              </p>
            </div>
            <div className="text">
              <p>{userData?.about?.subTitle}</p>
            </div>
            <div className="button flex hero-button !items-center">
              <div className="dizme_tm_button">
                <a className="anchor" href="#about">
                  <span>About Me</span>
                </a>
              </div>
              <div className="social hero_social">
                <ul>
                  {userData &&
                    userData?.social_handles &&
                    userData?.social_handles.map((social, i) => (
                      <li key={i}>
                        <a href={social.image.url}>
                          <img src={social.image.url} className="hero_social_icon " />
                          {/* <i className={social.platform} /> */}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="avatar">
            <div className="image">
              <img
                src={userData && userData?.about?.avatar ? userData?.about?.avatar?.url : "/img/slider/avatar.png"}
                alt="image"
              />
              {data &&
                data?.skills &&
                data?.skills.map(
                  (skill, i) =>
                    skill.icon && (
                      <span
                        key={i}
                        className={`skills ${skill.name} anim_moveBottom`}
                      >
                        {parse(skill?.icon)}
                      </span>
                    )
                )}
            </div>
          </div>
        </div>
      </div>
      <div className="dizme_tm_down">
        <a className="anchor" href="#process">
          <svg
            width="26px"
            height="100%"
            viewBox="0 0 247 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "1.5",
            }}
          >
            <path
              id="wheel"
              d="M123.359,79.775l0,72.843"
              style={{
                fill: "none",
                stroke: dark ? "#fff" : "#000",
                strokeWidth: 20,
              }}
            />
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style={{
                fill: "none",
                stroke: dark ? "#fff" : "#000",
                strokeWidth: 20,
              }}
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  );
};
export default Home;
