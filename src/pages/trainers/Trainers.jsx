import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import Trainer from "../../components/Trainer";
import "./trainers.css";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea facere
        corporis reprehenderit quas cum labore vero deserunt tenetur iusto in,
        blanditiis soluta placeat pariatur ipsa qui vel neque nam nulla.
      </Header>

      <section className="trainer-section">
        <div className="container trainer-container">
          {trainers?.map(({ id, image, name, job, socials }) => (
            <Trainer
              key={id}
              image={image}
              name={name}
              job={job}
              socials={[
                { icon: <BsInstagram />, link: socials[0] },
                { icon: <AiOutlineTwitter />, link: socials[1] },
                { icon: <FaFacebookF />, link: socials[2] },
                { icon: <FaLinkedinIn />, link: socials[3] },
              ]}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Trainers;
