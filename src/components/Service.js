import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";
import Image from "next/image";

const serviceData = [
  {
    name: "Frontend Development",
    icon: "img/svg/web.svg", // Icon for Frontend Development
    img: "img/service/1.jpg",
    description: [
      "Expertise in creating engaging, interactive user interfaces using modern technologies like ReactJS and HTML5/CSS3.",
      "Focus on user experience and design to build responsive, accessible web applications."
    ],
  },
  {
    name: "Backend Development",
    icon: "img/svg/cpu.svg", // Icon for Backend Development
    img: "img/service/2.jpg",
    description: [
      "Proficient in server-side development with Node.js and databases like MongoDB, ensuring robust and scalable backend solutions."
    ],
  },
  {
    name: "Full Stack Development",
    icon: "img/svg/star.svg", // Icon for Full Stack Development
    img: "img/service/3.jpg",
    description: [
      "Combining frontend and backend skills to deliver complete web solutions, capable of tackling complex, multifaceted projects."
    ],
  },
  {
    name: "Responsive Web Design",
    icon: "img/svg/phone.svg", // Icon for Responsive Web Design
    img: "img/service/4.jpg",
    description: [
      "Developing websites that provide optimal viewing experience across a wide range of devices, from desktops to mobile phones."
    ],
  },
];
const Service = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={i}
                  >
                    <div className="list_inner">
                      <Image  className="svg" src={service.icon} alt="" />
                      <h3 className="title">{service.name}</h3>
                      <p className="text">
                        {service.description[0].substring(0, 138)}.
                      </p>
                      <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <Image 
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
