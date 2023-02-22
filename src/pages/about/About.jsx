import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
        vero architecto iusto officia non ut, atque in maiores officiis, rem
        quas dicta, ipsa reprehenderit! Velit laboriosam maiores nostrum minima
        saepe?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              distinctio adipisci deserunt veritatis eveniet placeat, rem
              pariatur quo odio ea, dolore obcaecati ipsum laborum autem eaque
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              distinctio adipisci deserunt veritatis eveniet placeat, rem
              consequuntur excepturi recusandae animi.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              distinctio adipisci deserunt veritatis eveniet placeat, rem
              consequuntur excepturi recusandae animi.
            </p>
            <p>
              distinctio adipisci deserunt veritatis eveniet placeat, rem
              consequuntur excepturi recusandae animi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              consequuntur excepturi recusandae animi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
