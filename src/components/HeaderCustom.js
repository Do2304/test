import { BellOutlined, DownOutlined, HomeOutlined } from "@ant-design/icons";
import "../css/header.css";
import { Badge } from "antd";
import Mu from "../images/Mu03.jpg";

function HeaderCustom() {
  return (
    <>
      <div className="header">
        <div className="menu">
          <div className="icon">
            <HomeOutlined className="icon-home" />
          </div>
          <span className="mana">Content Management</span>
        </div>
        <div className="info">
          <div className="image">
            <img src={Mu} />
          </div>
          <div className="name">
            <div className="name-name">Jack Kimber</div>
            <div className="name-position">Content Manager</div>
          </div>
          <div className="down">
            <DownOutlined />
          </div>
          <div className="bell">
            <Badge dot>
              <BellOutlined
                style={{
                  fontSize: 16,
                }}
              />
            </Badge>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderCustom;
