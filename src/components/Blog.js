import { Fragment, useState } from "react";
import BlogPopup from "./popup/BlogPopup";
import Image from "next/image";

const blogData = [
  {
    title: "The Intersection of Web Development and Healthcare",
    category: "Web Development",
    date: "15 November, 2023",
    author: "Feras Abdullah",
    img: "img/news/1.jpg",
    description: [
      "Exploring how web development can play a crucial role in the healthcare industry, enhancing patient care and medical research.",
      "Discussing recent projects where web technologies have been used to create innovative healthcare solutions.",
      "Insights into the challenges and rewards of merging technical development with medical knowledge."
    ],
  },
  {
    title: "Modern Front-End Technologies in 2023",
    category: "Front-End Development",
    date: "02 October, 2023",
    author: "Feras Abdullah",
    img: "img/news/2.jpg",
    description: [
      "An overview of the latest trends and technologies in front-end web development, including React, Vue.js, and Angular.",
      "Personal experiences and preferences regarding these technologies, and how they can shape the future of web interfaces.",
      "Case studies of projects utilizing these modern front-end tools to create engaging user experiences."
    ],
  },
  {
    title: "Building Scalable Web Applications",
    category: "Web Development",
    date: "20 August, 2023",
    author: "Feras Abdullah",
    img: "img/news/3.jpg",
    description: [
      "Discussing the importance of scalability in web application development and the best practices to achieve it.",
      "A deep dive into the technologies and architectures that support scalable web applications.",
      "Lessons learned from developing high-traffic web applications and tips for upcoming developers."
    ],
  },
];

const Blog = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  const onClick = (e, blog) => {
    e.preventDefault();
    setOpen(true);
    setActiveData(blog);
  };
  return (
    <Fragment>
      <BlogPopup open={open} close={() => setOpen(false)} data={activeData} />
      <div className="devman_tm_section" id="blog">
        <div className="devman_tm_news">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Latest News</span>
              <h3>Checkout My Recent Blogs</h3>
              <p>
                Dliquip ex ea commo do conse namber onequa ute irure dolor in
                reprehen derit in voluptate
              </p>
            </div>
            <div className="news_list">
              <ul>
                {blogData.map((blog, i) => (
                  <li
                    key={i}
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={`0.${i * 2}s`}
                  >
                    <div className="list_inner">
                      <div className="image">
                        <Image src="img/thumbs/42-29.jpg" alt="" />
                        <div className="main" data-img-url={blog.img} />
                        <a
                          className="devman_tm_full_link"
                          href="#"
                          onClick={(e) => onClick(e, blog)}
                        />
                      </div>
                      <div className="details">
                        <span className="category">
                          <a href="#" onClick={(e) => onClick(e, blog)}>
                            {blog.category}
                          </a>
                        </span>
                        <h3 className="title">
                          <a href="#" onClick={(e) => onClick(e, blog)}>
                            {blog.title}
                          </a>
                        </h3>
                      </div>
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
export default Blog;
