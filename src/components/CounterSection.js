import { lineBreak } from "../utilits";
import Counter from "./Counter";

const counterData = [
  { smallValue: true, value: 3, name: "Completed\nProjects" }, // Number of projects completed like Pyramid, Food Delivery Platform, etc.
  { smallValue: true, value: 1, name: "Year of\nExperience" }, // Years of experience in web development
  { smallValue: false, value: 5, name: "Programming\nLanguages" }, // Number of programming languages known (JavaScript, TypeScript, etc.)
];
const CounterSection = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_counter_section">
        <div className="container">
          <div className="counter_list">
            <ul>
              {counterData.map((counter, i) => (
                <li key={i}>
                  <div className="list_inner">
                    <div className="wrapper">
                      <div className="value">
                        <span className="abs">
                          <Counter end={counter.value} />
                          {counter.smallVlaue ? (
                            <label className="small">+</label>
                          ) : (
                            <label className="big"></label>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <h3
                          dangerouslySetInnerHTML={lineBreak(counter.name)}
                        ></h3>
                      </div>
                    </div>
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
  );
};
export default CounterSection;
