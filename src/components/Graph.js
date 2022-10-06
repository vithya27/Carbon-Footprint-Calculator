import React from "react";
import {
  BarChart,
  Bar,
  Label,
  LabelList,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Summary from "./Summary";

const Graph = (props) => {
  const airReturns = props.returns.map((d) => {
    return {
      activity: `${d.from} - ${d.to}`,
      CO2E: parseInt(d.co2e, 10),
    };
  });

  const railReturns = props.railReturns.map((d) => {
    return {
      activity: `Rail - ${d.distance} miles`,
      CO2E: parseInt(d.co2e, 10),
      // CO2E: parseInt(returns[0].CO2E, 10) + parseInt(d.co2e, 10),
    };
  });

  const allReturns = [...airReturns, ...railReturns];

  return (
    <>
      <div className="col-sm-8">
        <ResponsiveContainer width="80%" height={400}>
          <BarChart
            width={600}
            height={400}
            data={allReturns}
            margin={{
              top: 5,
              right: 0,
              left: 15,
              bottom: 5,
            }}
          >
            <Bar dataKey="CO2E" fill="#1c4637">
              <LabelList dataKey="activity" position="top" />
            </Bar>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="activity">
              <Label value="Activity" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis
              label={{
                value: "Amount of CO2E",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="col-sm-4">
        <Summary returns={allReturns} />
      </div>
    </>
  );
};

export default Graph;
