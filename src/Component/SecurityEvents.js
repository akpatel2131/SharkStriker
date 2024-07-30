// src/SecurityEventsPage.js
import React from "react";
import ReactEcharts from "echarts-for-react";
import {
  Box,
  MenuItem,
  Select,
  Typography,
  Switch,
  Divider,
} from "@mui/material";
import "./SecurityEvents.css";

const SecurityEventsPage = () => {
  const chartOptions = {
    xAxis: {
      type: "value",
      name: "Severity",
      axisLine: { lineStyle: { color: "#fff" } },
      axisLabel: { color: "#fff" },
      splitLine: { lineStyle: { color: "#333" }, type: "dotted" }, // Grid lines on x-axis
    },
    yAxis: {
      type: "value",
      name: "Fidelity",
      axisLine: { lineStyle: { color: "#fff" } },
      axisLabel: { color: "#fff" },
      splitLine: { lineStyle: { color: "#333" }, type: "dotted" }, // Grid lines on y-axis
    },
    series: [
      {
        data: [
          { value: [0, 0], name: "Point 1" },
          { value: [10, 20], name: "Point 1" },
          { value: [30, 40], name: "Point 2" },
          { value: [50, 60], name: "Point 3" },
          { value: [70, 80], name: "Point 4" },
        ],
        type: "line",
        lineStyle: {
          color: "#ff7f50",
        },
        itemStyle: {
          color: "#ff7f50",
        },
        label: {
          show: true,
          position: "top",
          color: "#fff",
        },
        smooth: true,
      },
    ],
    grid: {
      show: true,
      borderColor: "#333",
      containLabel: true,
    },
    backgroundColor: "#0f1b2b",
    textStyle: {
      color: "#fff",
    },
  };

  return (
    <Box className="security-events-page">
      <Box className="header-section">
        <Typography variant="h6" component="div" className="header-title">
          Top Security Events
        </Typography>
        <Select defaultValue={100} className="top-events-select">
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={150}>150</MenuItem>
        </Select>
      </Box>
      <ReactEcharts option={chartOptions} className="security-chart" />
      <div className="details-section">
        <Box className="score-box">
        <Typography variant="subtitle1" className="details-title">
          Private to Private Exploit Anomaly
        </Typography>
          <Typography variant="subtitle2">77 Score</Typography>
        </Box>
        <Divider className="divider" />
          <div className="details-content">
            <div className="details-column">
              <div className="info">
                <div className="label">Tenant</div>
                <div className="value">Root Tenant</div>
              </div>
              <div className="info">
                <div className="label">Application</div>
                <div className="value"></div>
              </div>
              <div className="info">
                <div className="label">Src IP</div>
                <div className="value">192.168.202.81</div>
              </div>
              <div className="info">
                <div className="label">Src Type</div>
                <div className="value">private</div>
              </div>
              <div className="info">
                <div className="label">Src Host</div>
                <div className="value">192.168.202.81</div>
              </div>
              <div className="info">
                <div className="label">Src User</div>
                <div className="value"></div>
              </div>
              <div className="info">
                <div className="label">Src Reputation</div>
                <div className="value"></div>
              </div>
              <div className="info">
                <div className="label">Src City</div>
                <div className="value">Unknown</div>
              </div>
              <div className="info">
                <div className="label">Src Country</div>
                <div className="value">United States</div>
              </div>
            </div>
            <div className="details-column">
              <div className="info">
                <div className="label">Username</div>
                <div className="value"></div>
              </div>
              <div className="info">
                <div className="label">Sensor</div>
                <div className="value">datasensor</div>
              </div>
              <div className="info">
                <div className="label">Dst IP</div>
                <div className="value">192.168.24.100</div>
              </div>
              <div className="info">
                <div className="label">Dst Type</div>
                <div className="value">private</div>
              </div>
              <div className="info">
                <div className="label">Dst Host</div>
                <div className="value">192.168.24.100</div>
              </div>
              <div className="info">
                <div className="label">Dst Reputation</div>
                <div className="value"></div>
              </div>
              <div className="info">
                <div className="label">Dst City</div>
                <div className="value">Unknown</div>
              </div>
              <div className="info">
                <div className="label">Dst Country</div>
                <div className="value">United States</div>
              </div>
            </div>
          </div>
      </div>
    </Box>
  );
};

export default SecurityEventsPage;
