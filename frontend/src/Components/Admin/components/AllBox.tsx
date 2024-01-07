import {ReactNode} from "react"

interface AllBoxProps {
    icon: ReactNode;
    title: string;
    count: number;
}

const AllBox: React.FC<AllBoxProps> = ({ icon, title, count }) => {
  return (
    <div className="dash">
     <div className="dash__icon">{icon}</div>
    <h3>{title}</h3>
    <p>{count}</p>
  </div>
  );
}

export default AllBox;