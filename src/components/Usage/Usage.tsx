import RemainingData from "../RemainingData/RemainingData";
import "./Usage.scss";

export default function Usage() {
  return (
    <div className="usage">
      <p className="usage__text">
        You've used <b>815gb</b> of your storage
      </p>
      <div className="usage__progress-and-range-container">
        <div className="usage__progress-bg">
          <div className="usage__progress-inside">
            <div className="usage__progress-inside__dot" />
          </div>
        </div>
        <div className="usage__range">
          <span>0 GB</span>
          <span>1000 GB</span>
        </div>
      </div>
      <RemainingData />
    </div>
  );
}
