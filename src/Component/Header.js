// src/Header.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Header.css"; // Custom CSS for styling

const Header = () => {
  return (
    <div position="static" className="app-bar">
      <div className="header">
        <div className="company-section">
          <div className="company-name">SharkStriker</div>
          <Typography variant="subtitle2" component="div">
            Starlight Command Center
          </Typography>
        </div>
        <div className="nav-links">
          <Typography variant="body1">Dashboard</Typography>
          <Typography variant="body1">Collect</Typography>
          <Typography variant="body1">Detect</Typography>
          <Typography variant="body1">Investigate</Typography>
          <Typography variant="body1">Respond</Typography>
          <Typography variant="body1">Configure</Typography>
          <Typography variant="body1">Admin</Typography>
        </div>
        <div className="icon-buttons">
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <HelpIcon />
          </IconButton>
        </div>
      </div>
      <div className="search">
        <div className="search-section"> 
          <input type="text" placeholder="SEARCH" className="search-input" />
          <IconButton className="search-button">
            <SearchIcon />
          </IconButton>
        </div>
        <div className="header-options">
          <Select defaultValue="None" className="header-select">
            <MenuItem value="None">None</MenuItem>
            {/* Add more options here */}
          </Select>
          <Select
            defaultValue="All Sensors"
            className="header-select"
          >
            <MenuItem value="All Sensors">All Sensors</MenuItem>
            {/* Add more options here */}
          </Select>
          <Select defaultValue="relative" className="header-select">
            <MenuItem value="relative">relative</MenuItem>
            {/* Add more options here */}
          </Select>
          <Select
            defaultValue="last 5 hours"
            className="header-select"
          >
            <MenuItem value="last 5 hours">last 5 hours</MenuItem>
            {/* Add more options here */}
          </Select>
          <Select defaultValue="None" className="header-select">
            <MenuItem value="None">None</MenuItem>
            {/* Add more options here */}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Header;
