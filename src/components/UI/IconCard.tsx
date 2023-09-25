import { ReactNode } from "react";
import "./IconCard.scss";

type IconCardProps = {
  children: ReactNode;
};

export default function IconCard({ children }: IconCardProps) {
  return <div className="icon-card">{children}</div>;
}
