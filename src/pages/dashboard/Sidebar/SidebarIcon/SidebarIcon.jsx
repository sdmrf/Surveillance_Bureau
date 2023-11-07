import './SidebarIcon.scss'; 

const SidebarIcon = ({ isOpen, onClick }) => {

  return (
    <div className={`SidebarIcon ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default SidebarIcon;
