import "./DashboardHeader.scss"
import MenuIcon from '@mui/icons-material/Menu';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextScroller from "./TextScroller";

const DashboardHeader = () => {
    return (
        <div className="DashboardHeader">
            <div className="Sidebar">
                <MenuIcon className="Icon" />
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
    )
}

export default DashboardHeader