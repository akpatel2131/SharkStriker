import React from "react";
import ReactECharts from "echarts-for-react";
import { Box, Typography } from "@mui/material";
import GuageChart from "../images/GuageChart.png";
import "./GaugeChart.css";

const GaugeChart = () => {
  return (
    <Box className='guage-container'>
      <div className="info-container">
        <div className="info-box">
          <div className="info-header">ML-IDS:</div>
          <div className="info-value">2/21k</div>
        </div>
        <div className="info-box">
          <div className="info-header">Traffic Anomalies:</div>
          <div className="info-value">31/220</div>
        </div>
        <div className="info-box">
          <div className="info-header">Malware Sandbox:</div>
          <div className="info-value">0/0</div>
        </div>
      </div>
      <img className="gauge-image" src={GuageChart} alt="guage Image" />
      <div className="info-container">
        <div className="info-box">
          <div className="info-header">Found Assets:</div>
          <div className="info-value">0/4</div>
        </div>
        <div className="info-box">
          <div className="info-header">UBA Detections:</div>
          <div className="info-value">0/00</div>
        </div>
        <div className="info-box">
          <div className="info-header">Daily Data Ingested:</div>
          <div className="info-value">11.78/1000</div>
        </div>
      </div>
    </Box>
  );
};

export default GaugeChart;
