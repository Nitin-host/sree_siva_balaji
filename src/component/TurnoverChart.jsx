import React, { Component } from "react";
import Chart from "react-apexcharts";

class TurnoverBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Turnover",
          data: [6, 9, 13], // values in Cr
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          toolbar: { show: false },
        },
        title: {
          text: "Year-wise Turnover",
          align: "center",
          style: {
            fontSize: "20px",
            color: "#333",
          },
        },
        xaxis: {
          categories: ["2021-2022", "2022-2023", "2024-2025"],
          labels: {
            style: {
              fontSize: "14px",
              colors: "#555",
            },
          },
        },
        yaxis: {
          title: {
            text: "Turnover (Cr)",
            style: { fontSize: "14px" },
          },
          labels: {
            formatter: (val) => `${val} Cr`,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: (val) => `${val} Cr`,
          style: {
            fontSize: "12px",
            colors: ["#000"],
          },
        },
        tooltip: {
          y: {
            formatter: (val) => `${val} Cr`,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 6,
            columnWidth: "45%",
            distributed: true,
          },
        },
        colors: ["#008FFB", "#00E396", "#FEB019"], // Optional: custom colors
      },
    };
  }

  render() {
    const { series, options } = this.state;
    return (
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    );
  }
}

export default TurnoverBarChart;
