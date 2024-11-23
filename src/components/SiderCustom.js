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
            <span className="box-title">Content Management</span>
          </div>
          <div className="box unactive">
            <div className="icon unactive">
              <FolderOpenOutlined />
            </div>
            <span className="box-title">Course Management</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiderCustom;
