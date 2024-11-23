import {
  DeleteOutlined,
  EditOutlined,
  HistoryOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import "../css/boxmodal.css";

function BoxModal() {
  return (
    <>
      <div className="boxmodal">
        <div className="box box1">
          <div className="icon">
            <LaptopOutlined />
          </div>
          <span>View Resources</span>
        </div>
        <div className="box">
          <div className="icon">
            <EditOutlined />
          </div>
          <span>Edit Resources</span>
        </div>
        <div className="box">
          <div className="icon">
            <HistoryOutlined />
          </div>
          <span>Version History</span>
        </div>
        <div className="box">
          <div className="icon">
            <DeleteOutlined />
          </div>
          <span>Delete Resources</span>
        </div>
      </div>
    </>
  );
}

export default BoxModal;
