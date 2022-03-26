import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import MineralModelFunctions from "./MineralModelFunctions";

const DemandChart = (props) => {
  const data = props.value;
  let dataArray = MineralModelFunctions.parseJsonFile(data);
  let labels = dataArray[0];
  console.log(dataArray);

  return (
    <LineChart
      width={1000}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis
        label={{ value: "Kilotons", angle: -90, position: "left" }}
        domain={["dataMin", "dataMax" + 1000]}
      />
      <Tooltip />
      <Legend layout="vertical" align="right" verticalAlign="middle" />
      <Line type="monotone" dataKey={labels[2]} stroke="red" dot={false} />
      <Line type="monotone" dataKey="iron" stroke="black" dot={false} />
      <Line type="monotone" dataKey="nickel" stroke="blue" dot={false} />
    </LineChart>
  );
};

export default DemandChart;
