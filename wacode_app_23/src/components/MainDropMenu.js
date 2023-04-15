import React, { useState, useEffect } from "react";
import DailyInputForm from "./DailyInputForm";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import WaterDamageIcon from "@mui/icons-material/WaterDamage";

// Create a functional component
const MainDropMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {};

  return (
    <div className="">
      <button onClick={handleMenuClick}>
        <MenuIcon
          className="absolute top-5 left-5 hover:bg-sky-100"
          fontSize="large"
        />
      </button>
      {isMenuOpen === true && (
        <div
          className={`
            absolute z-50 w-48 h-auto top-[4rem] 
            left-5 bg-sky-100 rounded-lg
            flex flex-col space-y-2 pt-2 pb-2
      `}
        >
          <MenuList>
            <Link to="/profile">
              <MenuItem>
                <ListItemIcon>
                  <AccountBoxIcon fontSize="small" />
                </ListItemIcon>

                <ListItemText>Profile</ListItemText>
              </MenuItem>
            </Link>

            <MenuItem>
              <ListItemIcon>
                <GroupIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Compare</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <WaterDamageIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Sustainability Tips</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </MenuList>
        </div>
      )}
    </div>
  );
};

// Export the component
export default MainDropMenu;
