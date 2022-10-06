import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { number } from "yup";

const Summary = (props) => {
  const summary = props.returns.map((d) => {
    return {
      activity: d.activity,
      CO2E: parseInt(d.CO2E, 10),
      trees: parseInt(d.CO2E / 26, 10),
    };
  });

  let totalCO2E = 0;
  summary.forEach((item) => {
    totalCO2E += item.CO2E;
  });

  let totalTrees = 0;
  summary.forEach((item) => {
    totalTrees += item.trees;
  });

  const [number, setNumber] = useState(totalTrees);

  const properties = useSpring({ val: number, from: { val: 0 } });

  const [co2e, setCo2e] = useState(totalCO2E);
  const carbonProperties = useSpring({ val: co2e, from: { val: 0 } });

  const handleClick = () => {
    setNumber(totalTrees);
    setCo2e(totalCO2E);
  };

  return (
    <>
      <div className="graphTitleContainer">
        <h3 className="graphTitle">Summary of Carbon Footprint</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h3>
              Plant
              <span>
                <animated.h1>
                  {properties.val.to((val) => Math.floor(val))}
                </animated.h1>
              </span>{" "}
              trees
            </h3>
          </div>
          <div className="col-md-2">
            <h3>
              to offset
              <span>
                <animated.h1>
                  {carbonProperties.val.to((val) => Math.floor(val))}
                </animated.h1>
              </span>
              kg of CO2E
            </h3>
          </div>
        </div>
      </div>
      <br />
      <button className="btn btn-success" onClick={handleClick}>
        Calculate Total
      </button>
      {/* <h4 className="text">
        You have to plant {totalTrees} trees to offset {totalCO2E} kg of CO2E
      </h4> */}
      <br />
      <a
        href="https://onetreeplanted.org/products/plant-trees"
        target="_blank"
        rel="noreferrer"
        className="btn btn-success"
      >
        Offset your emissions by clicking here
      </a>
    </>
  );
};

export default Summary;
