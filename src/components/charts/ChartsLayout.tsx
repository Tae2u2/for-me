"use client";

import Chart from "react-google-charts";

const ChartsLayout = () => {
  const data = [
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ];

  const options = {
    title: "Monthly Coffee Production by Country",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  const pieData = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const pieOptions = {
    title: "My Daily Activities",
    is3D: true,
  };
  const dataOld = [
    ["Name", "Popularity"],
    ["Cesar", 250],
    ["Rachel", 4200],
    ["Patrick", 2900],
    ["Eric", 8200],
  ];

  const dataNew = [
    ["Name", "Popularity"],
    ["Cesar", 370],
    ["Rachel", 600],
    ["Patrick", 700],
    ["Eric", 1500],
  ];

  const diffdata = {
    old: dataOld,
    new: dataNew,
  };

  return (
    <div>
      <Chart
        chartType="ScatterChart"
        data={[
          ["Age", "Weight"],
          [4, 5.5],
          [8, 12],
        ]}
        width="100%"
        height="400px"
        legendToggle
      />
      <br />
      <br />
      <Chart
        chartType="ComboChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
      <br />
      <br />
      <Chart
        chartType="PieChart"
        data={pieData}
        options={pieOptions}
        width={"100%"}
        height={"400px"}
      />
      <br />
      <br />
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        diffdata={diffdata}
      />
    </div>
  );
};

export default ChartsLayout;
