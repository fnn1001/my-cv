import { Fragment, useEffect, useRef, useState } from "react";

const accordionData = [
  {
    title: "Work Strategy",
    details:
      "My work strategy involves a thorough understanding of client requirements, followed by a detailed plan that encompasses both design and functionality. I prioritize responsive design and user experience, ensuring that each project is not only aesthetically pleasing but also functional and user-friendly.",
  },
  {
    title: "The Process of Our Work",
    details:
      "The development process starts with a prototype, followed by iterative development phases. Each phase includes testing and feedback integration, ensuring that the final product aligns with user expectations and delivers a seamless experience across different platforms.",
  },
  {
    title: "Core Value of Development",
    details:
      "At the core of my development process is a commitment to clean, maintainable code. I focus on creating scalable applications that can grow with the client's needs, while also ensuring security and performance are never compromised.",
  },
  {
    title: "Desire to Work Hard",
    details:
      "My passion for web development drives a strong work ethic. I am continually learning and staying up-to-date with the latest industry trends and technologies, allowing me to bring innovative solutions to the table and overcome complex challenges in development projects.",
  },
];

const Accordion = () => {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  useEffect(() => {
    setActive(0);
  }, []);

  const onClick = (value) =>
    value === active ? setActive(null) : setActive(value);

  return (
    <Fragment>
      <div
        className="devman_tm_accordion"
        data-active={1}
        data-type="accordion"
      >
        {accordionData.map((accordion, i) => (
          <div
            className={`accordion_in ${active == i ? "acc_active" : ""}`}
            key={i}
          >
            <div className="acc_head" onClick={() => onClick(i)}>
              <span className="plus" />
              <p>{accordion.title}</p>
            </div>
            <div
              className={`acc_content d-block`}
              ref={contentEl}
              style={
                active === i
                  ? {
                      height:
                        contentEl.current && contentEl.current.scrollHeight,
                    }
                  : { height: "0px" }
              }
            >
              <div className="acc_content_in">
                <p>{accordion.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Accordion;
