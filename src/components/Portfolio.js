import { Fragment, useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const [popup, setPopup] = useState(false);

  // Add your project details here
  const projects = [
    
    {
      title: "Datadine",
      category: "Full-Stack Development",
      link: "https://encouraging-calf-top-hat.cyclic.app/",
      imageUrl: "img/portfolio/6.jpg" // Placeholder image
    },
    {
      title: "CoinKeeper",
      category: "Full-Stack Development",
      link: "https://coruscating-cannoli-43d39c.netlify.app/",
      imageUrl: "img/portfolio/5.jpg" // Placeholder image
    },
    {
      title: "Pyramid - Memory Game",
      category: "Front-End Development",
      link: "https://fnn1001.github.io/pyramid/",
      imageUrl: "img/portfolio/9.jpg" // Placeholder image
    },
    // Add more projects as needed
  ];

  return (
    <Fragment>
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="devman_tm_section" id="portfolio">
        <div className="devman_tm_portfolio">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
                Here are some of the projects that showcase my skills in web development.
              </p>
            </div>
            <div className="portfolio_list">
              <ul>
                {projects.map((project, index) => (
                  <li className={`wow fadeInUp`} data-wow-duration="1s" key={index}>
                    <div className="list_inner">
                      <div className="background_image" data-img-url={project.imageUrl} />
                      <div className="content">
                        <div className="details">
                          <span className="category">
                            <a href="#">{project.category}</a>
                          </span>
                          <h3 className="title">
                            <a href={project.link}>
                              {project.title}
                            </a>
                          </h3>
                          <span className="view_project">
                            <a href={project.link}>
                              View Project <i className="icon-right-big" />
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="overlay" />
                      <a className="devman_tm_full_link" href={project.link} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
