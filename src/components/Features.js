import Image from "next/image";

const features_list = [
  {
    title: "Full Stack Development",
    icon: "img/svg/design.svg", // Icon for Full Stack Development
    text: "Proficient in both front-end and back-end development, creating seamless and efficient web applications using a variety of technologies including ReactJS, Node.js, and MongoDB.",
  },
  {
    title: "Healthcare Integration",
    icon: "img/svg/development.svg", // Icon for Healthcare Integration
    text: "Unique ability to merge medical insights with technical solutions, contributing to healthcare advancements through intuitive and impactful web applications.",
  },
  {
    title: "Innovative Problem-Solving",
    icon: "img/svg/landing.svg", // Icon for Problem-Solving
    text: "Combining a creative approach with solid technical skills to solve complex challenges and continuously innovate in the field of web development.",
  },
];
const Features = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
            <ul>
              {features_list.map((feature, i) => (
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`"0.${i * 2}s"`}
                  key={i}
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>{`0${i + 1}`}</span>
                        <h3>{feature.title}</h3>
                      </div>
                      <div className="icon">
                        <Image  className="svg" src={feature.icon} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
