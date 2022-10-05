import React from "react";
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ResponsiveContainer } from "recharts";

const Graph = (props) => {
  const returns = props.returns.map((d) => {
    return {
      activity: `${d.from} - ${d.to}`,
      co2e: parseInt(d.co2e, 10),
      //   trees: parseInt(d.co2e / 26, 10),
    };
  });

  return (
    <>
      <div className="container graph">
        <LineChart
          width={800}
          height={400}
          data={returns}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Line type="monotone" dataKey="co2e" stroke="8884d8" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="activity" />
          <YAxis />
          <Line type="monotone" dataKey="co2e" stroke="#82ca9d" />
        </LineChart>
      </div>
    </>
  );
};

export default Graph;
