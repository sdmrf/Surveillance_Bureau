import "./DashboardHeader.scss";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TextScroller from "./TextScroller";
import SidebarIcon from "../SidebarIcon/SidebarIcon";
import { useState } from "react";

const DashboardHeader = ({ isSidebarOpen, toggleSidebar }) => {

  return (
    <div className="DashboardHeader">
      <div className="SidebarX">
      <SidebarIcon isOpen={isSidebarOpen} onClick={toggleSidebar} style={{ zIndex: isSidebarOpen ? 1001 : 'auto' }} />
      </div>
      <div className="Heading">
        <div className="Notice">
          <TextScroller text="Notice: This is a demo website. Please do not enter any sensitive information." />
        </div>
        <div className="Location">
          <PlaceOutlinedIcon className="Icon" />
        </div>
      </div>
      <div className="Icons">
        <MarkUnreadChatAltOutlinedIcon className="Icon" />
        <NotificationsActiveOutlinedIcon className="Icon" />
        <AccountCircleOutlinedIcon className="Icon" />
      </div>
    </div>
  );
};

export default DashboardHeader;
