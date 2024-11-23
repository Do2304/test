import "../css/sider.css";
import { FolderOpenOutlined, HomeOutlined } from "@ant-design/icons";

function SiderCustom() {
  return (
    <>
      <div className="sider">
        <div className="line"></div>
        <div className="title">School Resource</div>
        <div className="menu-sider">
          <div className="box">
            <div className="icon">
              <HomeOutlined />
            </div>
            <span>Content Management</span>
          </div>
          <div className="box1">
            <div className="icon">
              <FolderOpenOutlined />
            </div>
            <span>Course Management</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiderCustom;
