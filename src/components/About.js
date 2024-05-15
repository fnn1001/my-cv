import Image from "next/image";
const aboutData = {
  designation: "Full Stack Web Developer",
  title: "I Create Solutions that Combine Technology and Healthcare",
  text: [
    "As a Full Stack Web Developer with a background in medicine, I focus on developing applications that bridge the gap between technology and healthcare. My experience in diverse environments fuels my passion for building solutions that are not only technologically advanced but also have a meaningful impact on people's lives.",
    "With a strong foundation in languages like TypeScript, JavaScript, and frameworks like ReactJS, combined with a deep understanding of healthcare, I am dedicated to delivering high-quality, user-centric web solutions."
  ],

  skillIcons: [
    { name: "TypeScript", icon: "img/svg/typescript.svg" },
    { name: "ReactJS", icon: "img/svg/react-2.svg" },
    { name: "JavaScript", icon: "img/svg/javascript-1.svg" },
    { name: "NodeJS", icon: "img/svg/nodejs-1.svg" },
  ],
};

const About = () => {
  return (
    <div className="devman_tm_section" id="about">
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <Image src="img/thumbs/64-49.jpg" alt="" />
                <div className="main" data-img-url="img/about/knmu.png" />
                <div className="extra_image">
                  <div className="image_inner">
                    <Image src="img/thumbs/1-1.jpg" alt="" />
                    <div
                      className="main_extra"
                      data-img-url="img/about/ironhack.jpg"
                    />
                  </div>
                </div>
                {aboutData.skillIcons.map((skill, i) => (
                  <div className={i === 0 ? "extra_image" : ""} key={i}>
                    <span
                      className={`icon_${i + 1} wow fadeIn`}
                      data-wow-duration="1s"
                      data-wow-delay={`0.${i * 2}s`}
                    >
                      <Image className="svg" src={skill.icon} alt="" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>
                  {`I'm`} a {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </div>
              <div className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              <div className="devman_tm_button">
                <a className="anchor" href="#portfolio">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
