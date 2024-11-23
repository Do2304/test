import {
  DeleteOutlined,
  EditOutlined,
  HistoryOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import "../css/boxmodal.css";

function BoxModal() {
  const menuItems = [
    { icon: <LaptopOutlined />, label: "View Resources" },
    { icon: <EditOutlined />, label: "Edit Resources" },
    { icon: <HistoryOutlined />, label: "Version History" },
    { icon: <DeleteOutlined />, label: "Delete Resources" },
  ];

  return (
    <div className="boxmodal">
      {menuItems.map((item, index) => (
        <div className="box" key={index}>
          <div className="icon">{item.icon}</div>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default BoxModal;
