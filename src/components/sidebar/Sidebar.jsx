import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Map,
  Book,
  Replay,
  FileCopy,
  People,
  Backup
} from "@material-ui/icons";
import BasicSelect from "./dropdown.tsx";
import { Link } from "react-router-dom";

export default function Sidebar({band, setBand, setData}) {
  
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/analytics" className="link">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/revenue" className="link">
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Revenue
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/socialmedia" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Social Media
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/accounting" className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Accounting
            </li>
            </Link>
            <Link to="/reports" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
          <Link to="/mail" className="link">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            </Link>
            <Link to="/feedback" className="link">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            </Link>
            <Link to="/messages" className="link">
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Ads</h3>
          <ul className="sidebarList">
          <Link to="/manage" className="link">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            </Link>
            <Link to="/adanalytics" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            </Link>
            <Link to="/adreports" className="link">
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Touring</h3>
          <ul className="sidebarList">
          <Link to="/heatmap" className="link">
            <li className="sidebarListItem">
              <Map className="sidebarIcon" />
              Heatmap
            </li>
            </Link>
            <Link to="/planner" className="link">
            <li className="sidebarListItem">
              <Book className="sidebarIcon" />
              Planner
            </li>
            </Link>
            <Link to="/history" className="link">
            <li className="sidebarListItem">
              <Replay className="sidebarIcon" />
              History
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Files</h3>
          <ul className="sidebarList">
          <Link to="/files" className="link">
            <li className="sidebarListItem">
              <FileCopy className="sidebarIcon" />
              Files
            </li>
            </Link>
            <Link to="/people" className="link">
            <li className="sidebarListItem">
              <People className="sidebarIcon" />
              People
            </li>
            </Link>
            <Link to="/backups" className="link">
            <li className="sidebarListItem">
              <Backup className="sidebarIcon" />
              Backups
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarDropdown">
          <BasicSelect band={band} setBand={setBand} setData={setData}/>
        </div>
      </div>
    </div>
  );
}
