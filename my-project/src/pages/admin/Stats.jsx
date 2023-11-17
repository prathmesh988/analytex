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
import AdminTable from "../../components/AdminTable";
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

const AdminGraph = () => (
  <Card className="w-[900px] self">
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
);
function KpiCard() {
  return (
    <Card className="h-[12rem] w-[25rem]">
      <Flex alignItems="start">
        <div>
          <h1 className="text-white">Waste Generated</h1>
          <Metric> 12,699</Metric>
        </div>
        <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
      </Flex>
      <Flex className="mt-4">
        <Text className="truncate">68% ( 149,940)</Text>
        <Text> 220,500</Text>
      </Flex>
      <ProgressBar value={15.9} className="mt-2" />
    </Card>
  );
}

const Stats = () => (
  <div className="flex flex-col gap-1">
    <h1 className="text-black text-3xl font-bold pb-4">Admin Page</h1>

    <div className="flex gap-1">
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
      <div className="flex flex-wrap gap-1">
        <KpiCard />
        <KpiCard />
        <KpiCard />
        <KpiCard />
      </div>
    </div>
    <AdminTable />
    <div className="flex flex-wrap">
      <AdminGraph />
      <AdminGraph />
      <AdminGraph />
      <AdminGraph />
    </div>
  </div>
);

export default Stats;
