import Image from "next/image";

const Partners = ({ dark }) => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_partners">
        <div className="container">
          <div className="partners_inner">
            <ul>
              <li>
                <div className="list_inner">
                  <Image
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    src={`img/partners/${dark ? "light" : "dark"}/1.png`}
                    alt=""
                  />
                  <a className="devman_tm_full_link" href="#" />
                </div>
              </li>
              {/* Similar structure for other list items */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
