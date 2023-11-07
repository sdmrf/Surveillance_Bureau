import VisibilityIcon from '@mui/icons-material/Visibility';
import "./DashboardContent.scss";

const fakeCriminals = [
  {
    id: "#CR123456",
    img: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    name: "John Smith",
    history: "View History",
    status: "Currently in jail",
    actions: "Actions",
  },
  {
    id: "#CR987654",
    img: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    name: "Emily Johnson",
    history: "View History",
    status: "Life imprisonment",
    actions: "Actions",
  },
  {
    id: "#CR234567",
    img: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    name: "Michael Brown",
    history: "View History",
    status: "Currently left under bail",
    actions: "Actions",
  },
  {
    id: "#CR876543",
    img: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    name: "Sarah Davis",
    history: "View History",
    status: "Awaiting trial",
    actions: "Actions",
  },
  {
    id: "#CR345678",
    img: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    name: "David Wilson",
    history: "View History",
    status: "Released on parole",
    actions: "Actions",
  },
  {
    id: "#CR765432",
    img: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    name: "Jessica Martinez",
    history: "View History",
    status: "Fugitive",
    actions: "Actions",
  },
  {
    id: "#CR456789",
    img: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    name: "Christopher Taylor",
    history: "View History",
    status: "Acquitted",
    actions: "Actions",
  },
  {
    id: "#CR654321",
    img: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    name: "Amanda Anderson",
    history: "View History",
    status: "Currently in jail",
    actions: "Actions",
  },
  {
    id: "#CR567890",
    img: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    name: "Kevin Harris",
    history: "View History",
    status: "Released after serving sentence",
    actions: "Actions",
  },
  {
    id: "#CR543210",
    img: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    name: "Laura Martinez",
    history: "View History",
    status: "Awaiting deportation",
    actions: "Actions",
  },
];

const Cases = () => {

  return (
    <div className="Cases">
      <div className="CHeader">
        <span>CRIMINAL ID</span>
        <span>CRIMINAL NAME</span>
        <span>VIEW HISTORY</span>
        <span>CURRENT STATUS</span>
        <span>ACTIONS</span>
      </div>
      <div
        className="Case"
      >
        {fakeCriminals.map((criminal) => (
          <div className="Criminal" key={criminal.id}>
            <span>{criminal.id}</span>
            <span className="CriminalDetails">
              <img src={criminal.img} alt="" />
              <span>{criminal.name}</span>
            </span>
            <span><VisibilityIcon/></span>
            <span>{criminal.status}</span>
            <span>{criminal.actions}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cases;
