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
} from "recharts";
import { ResponsiveContainer } from "recharts";

const Graph = (props) => {
  const returns = props.returns.map((d) => {
    return {
      activity: `${d.from} - ${d.to}`,
      CO2E: parseInt(d.co2e, 10),
      unit: d.unit,
    };
  });

  return (
    <ResponsiveContainer width="80%" height={400}>
      <BarChart
        width={600}
        height={400}
        data={returns}
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
          <Label value="Flight" offset={0} position="insideBottom" />
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
  );
};

export default Graph;
