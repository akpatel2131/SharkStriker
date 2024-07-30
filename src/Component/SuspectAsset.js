import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { Select } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import RadarGraph from "../images/RadarGraph.png";
import "./SuspectAsset.css";

const SuspectAssetsComponent = () => {
  const chartRef = useRef(null);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  const assetData = [
    {
      risk: 99.1,
      ip: "10.0.1.38",
      details: "Detailed information for asset 1",
    },
    {
      risk: 98.9,
      ip: "172.22.131.165",
      details: "Detailed information for asset 2",
    },
    {
      risk: 97.4,
      ip: "Steve's PC",
      details: "Detailed information for asset 3",
    },
  ];

  const expandData = [
    "Traffic",
    "Reccon",
    "Delivery",
    "Exploit",
    "Install",
    "C&C",
    "Action",
  ];

  return (
    <div className="suspect-assets-container">
      <div className="header">
        <div className="title">
          <h3>Current Top Suspect Assets</h3>
          <Select native value={25} className="select-option">
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </Select>
        </div>
      </div>
      <img src={RadarGraph} className="img" />

      <div className="asset-list">
        {assetData.map((asset, index) => (
          <>
            <div key={index} className="asset-item">
              <div className="risk-score">{asset.risk}</div>
              <div className="asset-ip">{asset.ip}</div>
              <div className="asset-actions">
                <button className="btn-panorama">Panoramic</button>
              </div>
              <div className="expand-icon" onClick={() => toggleExpand(index)}>
                {expanded[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </div>
            </div>
            {expanded[index] && (
              <div className="expand-info">
                {expandData.map((item) => (
                  <div className="asset-more-details">
                    <div>0</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default SuspectAssetsComponent;
