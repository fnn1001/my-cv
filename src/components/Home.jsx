import Counter from "./Counter";
import Image from "next/image";

const homeData = {
  firstName: "Feras",
  lastName: "Abdullah",
  designation: "Full Stack Web Developer",
  address: "Hanover, Germany",
  img: "img/hero/Feras.jpg", // Update with your image path
  bio: "Hello! I'm Feras Abdullah, a Full Stack Web Developer with an MD degree. Passionate about blending medical insights with tech skills, I specialize in creating intuitive web solutions. With expertise in TypeScript, MySQL, JavaScript, ReactJS, and more, I am committed to innovating and solving real-world problems.",
  numberOfProject: 3, // Update based on the number of projects you've done
  numberofyear: 1, // Update based on your years of experience in web development
};

const Home = () => {
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/3.jpg" />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="hello">Hello {`I'm`}</h3>
                <h3 className="name">
                  {homeData.firstName} {homeData.lastName}
                </h3>
                <h3 className="job">
                  {homeData.designation} from {homeData.address}
                </h3>
                <p className="text">{homeData.bio}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#contact">
                      Get In Touch
                    </a>
                  </div>
                  <div className="simple_button">
                    <a className="anchor" href="#about">
                      About Me
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">{homeData.firstName}</h3>
              <h3 className="stroke_2">{homeData.lastName}</h3>
            </div>
            <div className="right">
              <div className="image">
                <Image src="img/thumbs/53-61.jpg" alt="" />
                <div className="main" data-img-url={homeData.img} />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberofyear} />
                    </h3>
                    <span className="item_name">
                      Year of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberOfProject} />
                      <span className="extra">+</span>
                    </h3>
                    <span className="item_name">
                      Projects
                      <br />
                      Completed
                    </span>
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
export default Home;
