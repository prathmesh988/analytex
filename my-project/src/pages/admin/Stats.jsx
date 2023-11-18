import {
  AreaChart,
  Card,
  Title,
  Metric,
  Subtitle,
  Bold,
  Italic,
  Text,
  BadgeDelta,
  Flex,
  ProgressBar,
} from "@tremor/react";
import AdminCards from "../../components/AdminCards";
const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const valueFormatter = function (number) {
  return " " + new Intl.NumberFormat("us").format(number).toString();
};

const Stats = () => (
  <div className="flex flex-col gap-2 w-auto ">
    <h1 className="text-black text-3xl font-bold pb-4 ">Admin Page</h1>
    <AdminCards />
    <div className="flex flex-col gap-1">
      <Card className="w-[79vw] self">
        <Title>Waste Generated Over Time</Title>
        <AreaChart
          className="h-72 mt-4"
          data={chartdata}
          index="date"
          categories={["SemiAnalysis", "The Pragmatic Engineer"]}
          colors={["indigo", "cyan"]}
          valueFormatter={valueFormatter}
        />
      </Card>
    </div>
  </div>
);

export default Stats;
