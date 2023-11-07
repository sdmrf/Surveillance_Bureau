import Cases from "./Cases";
import "./DashboardContent.scss";

const DashboardContent = () => {
  return (
    <div className="DashboardContent">
      <div className="DCHeader">
        <div className="Title">
          Ongoing Cases | <span className="number">{10}</span>
        </div>
      </div>
    <Cases />
    </div>
  );
};

export default DashboardContent;
