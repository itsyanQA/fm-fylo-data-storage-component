import React from "react";
import "./Dashboard.scss";
import { ReactComponent as FyloLogo } from "../../assets/svg/logo.svg";
import { ReactComponent as DocumentIcon } from "../../assets/svg/icon-document.svg";
import { ReactComponent as FolderIcon } from "../../assets/svg/icon-folder.svg";
import { ReactComponent as UploadIcon } from "../../assets/svg/icon-upload.svg";
import IconCard from "../UI/IconCard";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <FyloLogo />
      <div className="dashboard__options">
        <IconCard>
          <DocumentIcon />
        </IconCard>
        <IconCard>
          <FolderIcon />
        </IconCard>
        <IconCard>
          <UploadIcon />
        </IconCard>
      </div>
    </div>
  );
}
