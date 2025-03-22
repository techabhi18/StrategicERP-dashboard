import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Dashboard = () => {
    const barChartRef = useRef(null);
    const pieChartRef = useRef(null);
    const lineChartRef = useRef(null);

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

        return () => {
            barChart.dispose();
            pieChart.dispose();
            lineChart.dispose();
        };
    }, []);

    return (
        <div className="w-full m-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-full gap-6">
                <div ref={barChartRef} style={{ width: "100%", height: "400px" }}></div>
                <div ref={pieChartRef} style={{ width: "100%", height: "400px" }}></div>
                <div ref={lineChartRef} style={{ width: "100%", height: "400px" }}></div>
            </div>
        </div>
    );
};

export default Dashboard;
