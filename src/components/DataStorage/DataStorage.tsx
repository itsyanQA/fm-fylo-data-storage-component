import { useDeviceEvaluator } from "../../hooks/use-device-evaluator";
import Dashboard from "../Dashboard/Dashboard";
import Usage from "../Usage/Usage";
import "./DataStorage.scss";

export default function DataStorage() {
  const { isMobile } = useDeviceEvaluator();

  return (
    <>
      <img
        className="bg-img"
        alt="background"
        src={require(!isMobile ? "../../assets/images/bg-desktop.png" : "../../assets/images/bg-mobile.png")}
      />
      <div className="data-storage">
        <Dashboard />
        <Usage />
      </div>
    </>
  );
}
