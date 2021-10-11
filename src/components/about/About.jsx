import "./about.css";
import Award from "../../img/award.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="about">
      <div className="about-left">
        <div
          className="about-left-card bg"
          style={{
            backgroundColor: theme.state.darkMode ? "white" : "",
            transition: "all 1s ease",
          }}
        ></div>
        <div className="about-left-card">
          <img
            src="https://photoplex.net/wp-content/uploads/2021/04/31-1.jpg"
            alt=""
            className="about-left-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-right-title">About Me</h1>
        <p className="about-right-subtitle">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="about-right-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          alias nulla laboriosam eligendi similique aspernatur fugit libero nisi
          optio odio consequuntur nostrum corrupti et earum quibusdam repellat.
          Quibusdam, modi dolor?
        </p>
        <div className="about-right-award">
          <img
            src="https://www.contestwatchers.com/wp-content/uploads/2020/04/The-Best-Brand-Awards-2020-International-Design-Competition-620x380.png"
            alt=""
            className="about-right-award-img"
            style={{
              border: theme.state.darkMode ? "1px solid white" : "",
              transition: "all 1s ease",
            }}
          />
          <div className="about-right-award-text">
            <h4
              className="about-right-award-text-title"
              style={{
                color: theme.state.darkMode ? "white" : "gray",
                transition: "all 1s ease",
              }}
            >
              International Design Awards 2021
            </h4>
            <p
              className="about-right-award-text-desc"
              style={{
                color: theme.state.darkMode ? "gray" : "black",
                transition: "all 1s ease",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              deserunt?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
