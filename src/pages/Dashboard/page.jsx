import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Dashboard = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const stackedLineChartRef = useRef(null);

  useEffect(() => {
    const barChart = echarts.init(barChartRef.current);
    barChart.setOption({
      title: { text: "ERP Software Sales Revenue (2024)", left: "center" },
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: ["SAP", "Oracle ERP", "Microsoft Dynamics", "NetSuite", "Odoo"] },
      yAxis: { type: "value" },
      series: [
        {
          name: "Revenue (in Billion $)",
          type: "bar",
          data: [25, 18, 14, 9, 4],
          color: "#007bff",
          emphasis: {
            focus: "series",
            itemStyle: {
              color: "#ff5733",
              borderColor: "#333",
              borderWidth: 2,
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
          },
        },
      ],
    });

    const pieChart = echarts.init(pieChartRef.current);
    pieChart.setOption({
      title: { text: "ERP Market Share (2024)", left: "center" },
      tooltip: { trigger: "item" },
      series: [
        {
          name: "Market Share",
          type: "pie",
          radius: "55%",
          data: [
            { value: 40, name: "SAP" },
            { value: 30, name: "Oracle ERP" },
            { value: 15, name: "Microsoft Dynamics" },
            { value: 10, name: "NetSuite" },
            { value: 5, name: "Odoo" },
          ],
          emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: "rgba(0, 0, 0, 0.5)" } },
        },
      ],
    });

    const lineChart = echarts.init(lineChartRef.current);
    lineChart.setOption({
      title: { text: "ERP User Growth (2019-2024)", left: "center" },
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: ["2019", "2020", "2021", "2022", "2023", "2024"] },
      yAxis: { type: "value" },
      series: [
        {
          name: "Users (in millions)",
          type: "line",
          data: [20, 30, 50, 80, 120, 180],
          color: "#28a745",
          smooth: true,
        },
      ],
    });

    const stackedLineChart = echarts.init(stackedLineChartRef.current);
    stackedLineChart.setOption({
      title: { text: "Stacked Line Chart - Traffic Sources", left: "center" },
      tooltip: { trigger: "axis" },
      legend: { data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"], top: "bottom" },
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      toolbox: { feature: { saveAsImage: {} } },
      xAxis: { type: "category", boundaryGap: false, data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
      yAxis: { type: "value" },
      series: [
        { name: "Email", type: "line", stack: "Total", data: [120, 132, 101, 134, 90, 230, 210] },
        { name: "Union Ads", type: "line", stack: "Total", data: [220, 182, 191, 234, 290, 330, 310] },
        { name: "Video Ads", type: "line", stack: "Total", data: [150, 232, 201, 154, 190, 330, 410] },
        { name: "Direct", type: "line", stack: "Total", data: [320, 332, 301, 334, 390, 330, 320] },
        { name: "Search Engine", type: "line", stack: "Total", data: [820, 932, 901, 934, 1290, 1330, 1320] },
      ],
    });

    return () => {
      barChart.dispose();
      pieChart.dispose();
      lineChart.dispose();
      stackedLineChart.dispose();
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">ERP Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div ref={barChartRef} style={{ width: "100%", height: "400px" }}></div>
        <div ref={pieChartRef} style={{ width: "100%", height: "400px" }}></div>
        <div ref={lineChartRef} style={{ width: "100%", height: "400px" }}></div>
        <div ref={stackedLineChartRef} style={{ width: "100%", height: "400px" }}></div>
      </div>
    </div>
  );
};

export default Dashboard;
