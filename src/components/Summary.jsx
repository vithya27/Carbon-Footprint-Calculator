import React from "react";

const Summary = (props) => {
  const summary = props.returns.map((d) => {
    return {
      activity: `${d.from} - ${d.to}`,
      CO2E: parseInt(d.co2e, 10),
      unit: d.unit,
      trees: parseInt(d.co2e / 26, 10),
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

  return (
    <>
      <h3 className="graphTitle">Summary of Carbon Footprint</h3>
      <h4 className="text">
        You have to plant {totalTrees} trees to offset {totalCO2E} kg of CO2E
      </h4>
      <a
        href="https://onetreeplanted.org/products/plant-trees"
        className="btn btn-success"
      >
        Offset your emissions by clicking here
      </a>
    </>
  );
};

export default Summary;
